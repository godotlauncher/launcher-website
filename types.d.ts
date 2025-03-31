type OS = 'Unknown' | 'macOS' | 'Windows' | 'Linux' | 'phone' | 'xbox' | 'iOS' | 'Android';

type Release = {
    published_at: string;
    id: number;
    name: string;
    tag_name: string;
};

type PluginGithubReleaseContent = {
    releases: Release[];
    latest: Release;
};