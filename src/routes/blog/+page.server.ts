import type { SvelteComponent } from "svelte";
// import { base } from "$app/paths";



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
    url: string
}



/** @type {import('./$types').PageLoad} */
export function load() {
    const glob_import = import.meta.glob<Glob>('$posts/*.md', { eager: true });
    const paths: [string, Glob][] = Object.entries(glob_import);

    let ps = paths.map((p) => p[0].split('/').pop()?.replace('.md', '') || '');

    console.log(JSON.stringify(ps, null, 2))

    return {
        posts: paths.map((p) => ({
            data: p[1].metadata,
            url: `blog/` + p[0].split('/').pop()?.replace('.md', '') || '',

        })).sort((first, second) =>
            new Date(second.data.date).getTime() - new Date(first.data.date).getTime()
        )


    };
}
