import type {
    Plugin,
    LoadContext,
    PluginContentLoadedActions,
} from '@docusaurus/types';

export default function pluginGitHubReleases(
    context: LoadContext,
    options: any
): Plugin {
    return {
        name: 'docusaurus-plugin-github-releases',

        async loadContent() {
            const res = await fetch('https://api.github.com/repos/godotlauncher/launcher/releases');
            if (!res.ok) {
                console.error('Failed to fetch GitHub releases:', res.statusText);
                return [];
            }
            const releases = await res.json();

            const latestRes = await fetch('https://api.github.com/repos/godotlauncher/launcher/releases/latest');
            if (!latestRes.ok) {
                console.error('Failed to fetch latest GitHub release:', latestRes.statusText);
                return releases;
            }
            const latest = await latestRes.json();

            return { releases, latest };
        },

        async contentLoaded({ content, actions }: {
            content: any;
            actions: PluginContentLoadedActions;
        }) {
            const { setGlobalData } = actions;
            setGlobalData(content);
        },
    };
}
