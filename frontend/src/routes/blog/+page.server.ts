import type { SvelteComponent } from "svelte";
// import { base } from "$app/paths";

export const prerender = true 
export const ssr = true

interface Glob {
    default: SvelteComponent;
    // metadata: Record<string, any>
    metadata: Metadata
}

interface Metadata {
    title: string,
    description: string;
    date: Date;
    categories: string[];
    published: boolean;
    thumbnail?: URL;
    url: URL;
}


// TODO: find ou why navigating to /blog directly on URL fails, but via buttons works

/** @type {import('./$types').PageLoad} */
export function load() {
    const glob_import = import.meta.glob<Glob>('$posts/*.md', { eager: true });
    const paths: [string, Glob][] = Object.entries(glob_import);

    return {
        posts: paths
            .map((path) => ({
                data: path[1].metadata,
                url: `blog/` + path[0].split('/').pop()?.replace('.md', '') || '',
            }))
            .filter((post) => post.data.published)
            .sort((first, second) =>
                new Date(second.data.date).getTime() - new Date(first.data.date).getTime()
            )
    };
}



