export type SupportedPlatform = Extract<OS, "Windows" | "macOS" | "Linux">;

export type PlatformDownloadOption = {
  id: number;
  platform: SupportedPlatform;
  arch: ArchKey;
  archLabel: string;
  label: string;
  href: string;
  fileExtension: string;
  asset: ReleaseAsset;
};

export type PlatformDownloadGroup = {
  platform: SupportedPlatform;
  options: PlatformDownloadOption[];
  primary?: PlatformDownloadOption;
};

export type ArchKey =
  | "neutral"
  | "universal"
  | "arm64"
  | "x86_64"
  | "x64"
  | "ia32"
  | "unknown";

const PLATFORM_MATCHERS: Record<SupportedPlatform, RegExp[]> = {
  Windows: [/[-_]win/i],
  macOS: [/[-_]mac/i, /macos/i],
  Linux: [/[-_]linux/i],
};

const REQUIRED_EXTENSIONS: Record<SupportedPlatform, string[]> = {
  Windows: [".exe"],
  macOS: [".dmg"],
  Linux: [".appimage", ".deb", ".rpm"],
};

const ARCH_PATTERNS: { key: ArchKey; label: string; tokens: RegExp[] }[] = [
  { key: "neutral", label: "Neutral", tokens: [/neutral/] },
  { key: "universal", label: "Universal", tokens: [/universal/] },
  { key: "arm64", label: "arm64", tokens: [/arm64/, /aarch64/] },
  { key: "x86_64", label: "x86_64", tokens: [/x86_64/] },
  { key: "x64", label: "x64", tokens: [/x64/] },
  { key: "ia32", label: "ia32", tokens: [/ia32/] },
  { key: "unknown", label: "Standard", tokens: [] },
];

const PLATFORM_ARCH_ORDER: Record<SupportedPlatform, ArchKey[]> = {
  Windows: ["neutral", "arm64", "x64", "ia32", "unknown"],
  macOS: ["universal", "arm64", "x64", "unknown"],
  Linux: ["x86_64", "arm64", "unknown"],
};

export const SUPPORTED_PLATFORMS: SupportedPlatform[] = [
  "Windows",
  "macOS",
  "Linux",
];

const hasRequiredExtension = (
  platform: SupportedPlatform,
  lowerName: string
): boolean => {
  const allowed = REQUIRED_EXTENSIONS[platform];
  return allowed.some((ext) => lowerName.endsWith(ext));
};

const detectPlatform = (name: string): SupportedPlatform | null => {
  const lower = name.toLowerCase();
  return (
    (Object.keys(PLATFORM_MATCHERS) as SupportedPlatform[]).find((platform) => {
      const matchesName = PLATFORM_MATCHERS[platform].some((pattern) =>
        pattern.test(lower)
      );
      if (!matchesName) {
        return false;
      }
      return hasRequiredExtension(platform, lower);
    }) || null
  );
};

const detectArch = (
  name: string,
  platform?: SupportedPlatform
): { key: ArchKey; label: string } => {
  const lower = name.toLowerCase();

  if (platform === "Windows") {
    if (/arm64|aarch64/.test(lower)) {
      return { key: "arm64", label: "arm64" };
    }
    if (/x86_64/.test(lower)) {
      return { key: "x86_64", label: "x86_64" };
    }
    if (/x64/.test(lower)) {
      return { key: "x64", label: "x64" };
    }
    if (/ia32|x86/.test(lower)) {
      return { key: "ia32", label: "ia32" };
    }
    return { key: "neutral", label: "neutral" };
  }

  const match = ARCH_PATTERNS.find((arch) =>
    arch.tokens.some((token) => token.test(lower))
  );
  return match
    ? { key: match.key, label: match.label }
    : { key: "unknown", label: "Standard" };
};

const getFileExtension = (filename: string): string => {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1) {
    return "";
  }
  const rawExt = filename.slice(lastDot + 1);
  if (!rawExt) {
    return "";
  }

  if (rawExt.toLowerCase() === "appimage") {
    return "AppImage";
  }

  return rawExt.toUpperCase();
};

const sortByPreference = (
  platform: SupportedPlatform,
  options: PlatformDownloadOption[]
): PlatformDownloadOption[] => {
  const order = PLATFORM_ARCH_ORDER[platform];
  return options.slice().sort((a, b) => {
    const indexA = order.indexOf(a.arch);
    const indexB = order.indexOf(b.arch);
    const rankA = indexA === -1 ? order.length : indexA;
    const rankB = indexB === -1 ? order.length : indexB;
    if (rankA !== rankB) {
      return rankA - rankB;
    }
    return a.asset.name.localeCompare(b.asset.name);
  });
};

export const extractPlatformGroup = (
  release: Release,
  platform: SupportedPlatform
): PlatformDownloadGroup => {
  const assets = release.assets ?? [];

  const platformOptions = assets
    .map((asset) => {
      const detectedPlatform = detectPlatform(asset.name);
      if (detectedPlatform !== platform) {
        return null;
      }

      const arch = detectArch(asset.name, platform);
      const fileExtension = getFileExtension(asset.name);
      const label =
        fileExtension.length > 0
          ? `${arch.label} (${fileExtension})`
          : arch.label;

      const option = {
        id: asset.id,
        platform,
        arch: arch.key,
        archLabel: arch.label,
        label,
        href: asset.browser_download_url,
        fileExtension,
        asset,
      } as PlatformDownloadOption;

      return option;
    })
    .filter((option): option is PlatformDownloadOption => option !== null);

  const ordered = sortByPreference(platform, platformOptions);
  const primary = ordered[0];

  return {
    platform,
    options: ordered,
    primary,
  };
};

export const extractAllPlatformGroups = (
  release: Release
): PlatformDownloadGroup[] =>
  SUPPORTED_PLATFORMS.map((platform) =>
    extractPlatformGroup(release, platform)
  );

const PLATFORM_ARCH_FALLBACK: Record<SupportedPlatform, ArchKey[]> = {
  Windows: ["x64", "x86_64", "arm64", "ia32", "neutral", "unknown"],
  macOS: ["arm64", "x64", "universal", "unknown"],
  Linux: ["x86_64", "arm64", "unknown"],
};

const PLATFORM_GENERAL_ARCHES: Record<SupportedPlatform, ArchKey[]> = {
  Windows: ["neutral"],
  macOS: ["universal"],
  Linux: ["x86_64", "arm64"],
};

const ARCH_EQUIVALENTS: Partial<Record<ArchKey, ArchKey[]>> = {
  x64: ["x64", "x86_64"],
  x86_64: ["x86_64", "x64"],
};

const findOptionByArchList = (
  options: PlatformDownloadOption[],
  candidates: ArchKey[]
): PlatformDownloadOption | undefined =>
  candidates
    .map((arch) => options.find((option) => option.arch === arch))
    .find((option) => Boolean(option));

const expandArchPreference = (arch: ArchKey): ArchKey[] => {
  const equivalents = ARCH_EQUIVALENTS[arch] ?? [arch];
  return Array.from(new Set([arch, ...equivalents]));
};

const flattenPreferredArch = (
  preference?: ArchKey | ArchKey[] | null
): ArchKey[] => {
  if (!preference) {
    return [];
  }
  const list = Array.isArray(preference) ? preference : [preference];
  return list.flatMap((arch) => expandArchPreference(arch));
};

type PreferredOptionParams = {
  preferArmBuild?: boolean;
  preferredArch?: ArchKey | ArchKey[] | null;
  preferGeneralFallback?: boolean;
};

export const selectPreferredDownloadOption = (
  group: PlatformDownloadGroup | undefined,
  params: PreferredOptionParams = {}
): PlatformDownloadOption | undefined => {
  if (!group) {
    return undefined;
  }

  const exactArchCandidates = flattenPreferredArch(params.preferredArch);
  if (exactArchCandidates.length > 0) {
    const exactMatch = findOptionByArchList(
      group.options,
      exactArchCandidates
    );
    if (exactMatch) {
      return exactMatch;
    }
  }

  if (params.preferArmBuild) {
    const armCandidate = group.options.find(
      (option) => option.arch === "arm64"
    );
    if (armCandidate) {
      return armCandidate;
    }
  }

  if (params.preferGeneralFallback) {
    const generalCandidates = PLATFORM_GENERAL_ARCHES[group.platform] ?? [];
    const general = findOptionByArchList(group.options, generalCandidates);
    if (general) {
      return general;
    }
  }

  const order = PLATFORM_ARCH_FALLBACK[group.platform] ?? [];
  const prioritized = findOptionByArchList(group.options, order);

  return prioritized ?? group.primary;
};
