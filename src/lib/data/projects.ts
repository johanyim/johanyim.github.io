import { base } from "$app/paths";

export interface Project {
    title: string;
    headline: string;
    description: string;
    href?: string;
}
export const projects: Project[] = [

    {
        title: "Googol Translate",
        headline: "English to anything translator",
        description: "English can be difficult. Why bother trying to understand English when talking in <em>caveman</em> is easier and clearly superior? Translate your English sentences to Caveman, Posh, Wildlife Documentary, Gen-Z and more.",
        href: "https://github.com/johanyim/googol_translate"
    },

    {
        title: "Simple color palette tool",
        headline: "Organize colors on X11 systems",
        description: "Using a range of Linux utilities to compose a simple, transparent system to organize colors. Directly interacts with your system clipboard to be used anywhere at anytime."
    },

    {
        title: "Color picker gallery",
        headline: "No more copy and pasting colors",
        description: "Using aws lambda, we make a serverless translation."
    },

    {
        title: "Terminal image viewer",
        headline: "Now you can view your images in your terminal!",
        description: "Using aws lambda, we make a serverless translation."
    },

    {
        title: ".dotfiles",
        headline: "My linux configurations",
        description: "Something I've always been working on is organizing and optimizing my Linux desktop configuration. I have an entire page on this site dedicated to this - check it out at '/linux'",
        href: "/linux"
    },

];

