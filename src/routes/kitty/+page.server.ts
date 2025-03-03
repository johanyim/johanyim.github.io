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
    thumbnail?: URL;
    url: URL;
}



/** @type {import('./$types').PageLoad} */
export function load() {
    const glob_import = import.meta.glob<Glob>("$lib/assets/dating/*", { eager: true });
    const paths: [string, Glob][] = Object.entries(glob_import);


    return {
        paths: paths.map((path) => path[0])
    };
}
