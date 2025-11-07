// src/hooks/useAgentOS.ts
import { useState, useEffect } from 'react';



export const useAgent = () => {
    const [os, setOS] = useState<OS>('Unknown');
    const [preferArmBuild, setPreferArmBuild] = useState(false);

    useEffect(() => {
        if (typeof navigator === 'undefined') {
            return;
        }

        const agent = navigator.userAgent.toLowerCase();
        let detectedOS: OS = 'Unknown';

        if (agent.includes('macintosh')) {
            detectedOS = 'macOS';
        } else if (agent.includes('windows')) {
            detectedOS = 'Windows';
        } else if (agent.includes('linux')) {
            detectedOS = 'Linux';
        }

        if (agent.includes('phone')) {
            detectedOS = 'phone';
        } else if (agent.includes('xbox')) {
            detectedOS = 'xbox';
        } else if (agent.includes('iphone') || agent.includes('ipad')) {
            detectedOS = 'iOS';
        } else if (agent.includes('android')) {
            detectedOS = 'Android';
        }

        setOS(detectedOS);

        const architecture = (navigator as any)?.userAgentData?.architecture?.toLowerCase?.();
        const prefersArm =
            agent.includes('arm64') ||
            agent.includes('aarch64') ||
            agent.includes('apple silicon') ||
            (architecture && architecture.includes('arm'));

        setPreferArmBuild(prefersArm);
    }, []);

    return { os, preferArmBuild };
};
