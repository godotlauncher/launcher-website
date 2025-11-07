type OS = 'Unknown' | 'macOS' | 'Windows' | 'Linux' | 'phone' | 'xbox' | 'iOS' | 'Android';

type ReleaseAsset = {
    id: number;
    name: string;
    label: string | null;
    state: string;
    size: number;
    browser_download_url: string;
    content_type: string;
};

type Release = {
    published_at: string;
    id: number;
    name: string;
    tag_name: string;
    assets: ReleaseAsset[];
};

type PluginGithubReleaseContent = {
    releases: Release[];
    latest: Release;
};
