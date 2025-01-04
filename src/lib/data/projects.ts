import { base } from "$app/paths";

export interface Project {
    title: string;
    headline: string;
    description: string;
    href?: string;
}

export const projects: Project[] = [
    {
        title: ".dotfiles",
        headline: "My linux configurations",
        description: "Something I've always been working on is optimizing my Linux desktop configuration and workflow. Check out my Linux configuration files on Github",
        href: "https://github.com/johanyim/.dotfiles"
    },


    {
        title: "Googol Translate",
        headline: "English to anything translator",
        description: "English can be difficult. Why bother trying to understand English when talking in <em>caveman</em> is easier? Translate your English sentences to Caveman, Posh, Wildlife Documentary, Gen-Z and more.",
        href: "https://github.com/johanyim/googol_translate"
    },

    {
        title: "Simple color palette tool",
        headline: "Organize colors on X11 systems",
        description: "Using a range of Linux utilities to compose a simple, transparent system to organize colors. Directly interacts with your system clipboard to be used anywhere at anytime."
    },

    {
        title: "Terminal image viewer",
        headline: "Now you can view your images in your terminal!",
        description: "Using rust to make a performant ascii image renderer in the terminal"
    },

];

