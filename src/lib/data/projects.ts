import { base } from "$app/paths";

export interface Project {
    title: string;
    headline: string;
    description: string;
    href?: string;
}

export const projects: Project[] = [

    {
        title: "Structure-Preserving Encryption and Decryption",
        headline: "Encrypt files without losing their data types",
        description: "A command line tool to encrypt JSON files, preserving their schema and types",
        href: "https://github.com/johanyim/spead"
    },

    {
        title: "Simple color palette tool",
        headline: "Organize colors on X11 systems",
        description: "Using a range of Linux utilities to compose a simple, transparent system to organize colors. Directly interacts with your system clipboard to be used anywhere at anytime.",
        href: "https://github.com/johanyim/fingerpaint"
    },

    {
        title: "My dotfiles",
        headline: "My linux configurations",
        description: "Something I've always been working on is optimizing my Linux desktop configuration and workflow. Check out my Linux configuration files on Github",
        href: "https://github.com/johanyim/dots"
    },

    // {
    //     title: "Googol Translate",
    //     headline: "English to anything translator",
    //     description: "English can be difficult. Why bother trying to understand English when talking in <em>caveman</em> is easier? Translate your English sentences to Caveman, Posh, Wildlife Documentary, Gen-Z and more.",
    //     href: "https://github.com/johanyim/googol_translate"
    // },
    //
    //
    // {
    //     title: "Terminal image viewer",
    //     headline: "Now you can view your images in your terminal!",
    //     description: "Using rust to make a performant ascii image renderer in the terminal"
    // },

];

