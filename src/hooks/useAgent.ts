// src/hooks/useAgentOS.ts
import { useState, useEffect } from "react";
import type { ArchKey, SupportedPlatform } from "@site/src/utils/releases";

type Bitness = "32" | "64" | null;

type HighEntropyValues = {
  architecture?: string;
  bitness?: string;
  platform?: string;
};

type NavigatorWithUAData = Navigator & {
  userAgentData?: {
    architecture?: string;
    bitness?: string;
    mobile?: boolean;
    platform?: string;
    getHighEntropyValues?: (
      hints: readonly ["architecture", "bitness", "platform"]
    ) => Promise<HighEntropyValues>;
  };
};

type AgentState = {
  os: OS;
  platform: SupportedPlatform | null;
  architecture: ArchKey | null;
  bitness: Bitness;
  hasExactArch: boolean;
  preferArmBuild: boolean;
  isMobile: boolean;
};

const DEFAULT_STATE: AgentState = {
  os: "Unknown",
  platform: null,
  architecture: null,
  bitness: null,
  hasExactArch: false,
  preferArmBuild: false,
  isMobile: false,
};

const toSupportedPlatform = (os: OS | null): SupportedPlatform | null => {
  if (os === "Windows" || os === "macOS" || os === "Linux") {
    return os;
  }
  return null;
};

const detectOS = (agent: string): OS => {
  let detected: OS = "Unknown";
  if (agent.includes("macintosh")) {
    detected = "macOS";
  } else if (agent.includes("windows")) {
    detected = "Windows";
  } else if (agent.includes("linux")) {
    detected = "Linux";
  }

  if (agent.includes("phone")) {
    detected = "phone";
  } else if (agent.includes("xbox")) {
    detected = "xbox";
  } else if (agent.includes("iphone") || agent.includes("ipad")) {
    detected = "iOS";
  } else if (agent.includes("android")) {
    detected = "Android";
  }

  return detected;
};

const detectMobile = (agent: string): boolean =>
  /(mobile|iphone|ipad|android|phone)/.test(agent);

type ArchDetectionResult = {
  arch: ArchKey;
  bitness: Bitness;
};

const detectArchFromAgent = (
  agent: string,
  platform: SupportedPlatform | null
): ArchDetectionResult | null => {
  if (/arm64|aarch64|apple silicon/.test(agent)) {
    return { arch: "arm64", bitness: "64" };
  }
  if (/universal/.test(agent) && platform === "macOS") {
    return { arch: "universal", bitness: null };
  }
  if (/x86_64/.test(agent)) {
    return {
      arch: platform === "Linux" ? "x86_64" : "x64",
      bitness: "64",
    };
  }
  if (/amd64|win64|wow64|x64/.test(agent)) {
    return { arch: platform === "Linux" ? "x86_64" : "x64", bitness: "64" };
  }
  if (/ia32|x86/.test(agent)) {
    const fallbackArch: ArchKey =
      platform === "Linux" ? "x86_64" : "x64";
    return { arch: fallbackArch, bitness: "32" };
  }
  return null;
};

const mapSupportedPlatformString = (
  value?: string
): SupportedPlatform | null => {
  if (!value) {
    return null;
  }
  const normalized = value.toLowerCase();
  if (normalized.includes("mac")) {
    return "macOS";
  }
  if (normalized.includes("win")) {
    return "Windows";
  }
  if (normalized.includes("linux")) {
    return "Linux";
  }
  return null;
};

const mapHighEntropyArch = (
  architecture?: string,
  bitness?: string,
  platform?: SupportedPlatform | null
): ArchDetectionResult | null => {
  if (!architecture) {
    return null;
  }
  const normalizedArch = architecture.toLowerCase();
  const normalizedBitness: Bitness =
    bitness === "32" || bitness === "64" ? bitness : null;

  if (normalizedArch.includes("arm")) {
    return { arch: "arm64", bitness: normalizedBitness ?? "64" };
  }
  if (normalizedArch.includes("x86")) {
    if (normalizedBitness === "32") {
      const fallbackArch: ArchKey =
        platform === "Linux" ? "x86_64" : "x64";
      return { arch: fallbackArch, bitness: "32" };
    }
    if (platform === "Linux") {
      return { arch: "x86_64", bitness: normalizedBitness ?? "64" };
    }
    return { arch: "x64", bitness: normalizedBitness ?? "64" };
  }
  if (normalizedArch.includes("universal") && platform === "macOS") {
    return { arch: "universal", bitness: normalizedBitness };
  }
  return null;
};

export const useAgent = () => {
  const [state, setState] = useState<AgentState>(DEFAULT_STATE);

  useEffect(() => {
    if (typeof navigator === "undefined") {
      return;
    }

    let active = true;
    const navigatorWithUA = navigator as NavigatorWithUAData;
    const userAgent = navigatorWithUA.userAgent.toLowerCase();
    const uaData = navigatorWithUA.userAgentData;

    const detectedOS = detectOS(userAgent);
    const platformFromOS = toSupportedPlatform(detectedOS);
    const archFromAgent = detectArchFromAgent(userAgent, platformFromOS);
    const mobileFromAgent = detectMobile(userAgent);

    const lowEntropyMobile =
      typeof uaData?.mobile === "boolean" ? uaData.mobile : mobileFromAgent;

    setState((prev) => {
      const next: AgentState = {
        ...prev,
        os: detectedOS,
        platform: platformFromOS ?? prev.platform,
        isMobile: lowEntropyMobile,
      };
      if (archFromAgent) {
        next.architecture = archFromAgent.arch;
        next.bitness = archFromAgent.bitness;
        next.hasExactArch = true;
        next.preferArmBuild = archFromAgent.arch === "arm64";
      }
      return next;
    });

    const lowEntropyPlatform = mapSupportedPlatformString(uaData?.platform);
    if (lowEntropyPlatform) {
      setState((prev) => ({
        ...prev,
        os: lowEntropyPlatform,
        platform: lowEntropyPlatform,
      }));
    }

    const resolveHighEntropy = async () => {
      if (typeof uaData?.getHighEntropyValues !== "function") {
        return;
      }
      try {
        const highEntropy = await uaData.getHighEntropyValues([
          "architecture",
          "bitness",
          "platform",
        ]);
        if (!active) {
          return;
        }

        const resolvedPlatform =
          mapSupportedPlatformString(highEntropy.platform) ??
          lowEntropyPlatform ??
          platformFromOS;

        const archFromEntropy = mapHighEntropyArch(
          highEntropy.architecture,
          highEntropy.bitness,
          resolvedPlatform ?? platformFromOS
        );

        setState((prev) => {
          const next: AgentState = { ...prev };
          if (resolvedPlatform) {
            next.os = resolvedPlatform;
            next.platform = resolvedPlatform;
          }
          if (archFromEntropy) {
            next.architecture = archFromEntropy.arch;
            next.bitness = archFromEntropy.bitness;
            next.hasExactArch = true;
            next.preferArmBuild = archFromEntropy.arch === "arm64";
          }
          return next;
        });
      } catch {
        // ignore high-entropy failures
      }
    };

    void resolveHighEntropy();

    return () => {
      active = false;
    };
  }, []);

  return state;
};
