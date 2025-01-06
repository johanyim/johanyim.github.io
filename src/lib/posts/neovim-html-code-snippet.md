---
title: Making code snapshots in HTML
description: Using neovim to create embeddable HTML code snippets
date: 2024-09-01
categories: 
- markdown
- neovim
published: true
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Programming_code.jpg/800px-Programming_code.jpg?20211217210447
---
<script>
  import code from "$code/code.html?raw";
  import tohtml_doc from "$code/tohtml-doc.html?raw";
  import tohtml_code from "$code/tohtml-code.html?raw";
  import CodeSnippet from "$molecules/CodeSnippet.svelte";
</script>
Typically, code snippets embedded into websites like this blog are handled with syntax highlighters like `Prism` or `Highlight.js`, this site in particular is using `Shiki` and it looks something like this:

```rust 
use std::fs;
const HOME_DIR: &'static str = "/home/johan/";
#[rustfmt::skip]
fn list_dotfile_paths(
    dir_name: &'static str,
) -> impl Iterator<Item = impl Iterator<Item = String>> {
    let directories = HOME_DIR.split_inclusive("/").map(String::from);

    // TODO: Handle file not found Error
    let paths = fs::read_dir(HOME_DIR)
        .unwrap().flatten()
        .filter_map(move |file| {
            file.path()
                .strip_prefix(HOME_DIR).ok()
                .and_then(|relative_path| relative_path.to_str().map(String::from))
        })
        .filter(|x| x.starts_with('.'))

    // NOTE: includes directories
    paths.map(move |path| directories.clone().chain(std::iter::once(path)))
}
```

Although it looks like `Shiki` has embedded perfectly normal Rust code into my HTML, it isn't what I'm seeing in my editor, Neovim. Most of the code here looks 'flat'. I only see 8 colors out of Catppuccin's Mocha's 26 color palette. Even if I tweaked with Shiki's CSS file, there's only so much syntax that the parser will understand. It thinks the `<` and `>` are operators and `str` is a keyword instead of a type -- so some colors simply have no easy fix and will remain incorrect.

Also, my brain only has a maximum memory of 1MB, so I rely on type hints more than I need to. In the procedure definition above, my neurons get `.flatten()`'d after the fifth line, rendering me useless. 

Worst of all, I bet you didn't even know that this code doesn't compile. Can you find the error? I know that my editor can. What I needed was a way to produce a "true" snapshot of what I was seeing in my editor to be embedded into HTML. Consider the same code in the snippet below:

<CodeSnippet content={code} />

This was produced by a script I wrote in Lua and Vim commands. Just take a moment to enjoy the colors, the type hints, the light-up comments, the virtual diagnostics -- even the missing semicolon is a spectacle. This snippet is exactly what I'm seeing in my editor and now you, the viewer, can enjoy seeing the errors I make.

#### Author's note
*By the way, I don't actually write code that looks like this. This was a made up example to fit as many syntax highlighting features as I could.*

## How I made this
One feature built into Neovim which I don't seem to hear about very often is the `:TOhtml` user command. 

<CodeSnippet content={tohtml_doc}/> 

Maybe I haven't used enough Lua to know how to understand (or even find) the documentation, but I felt like the documentation provided here is lacklustre compared to what it can do.

Many people


## The code

<CodeSnippet content={tohtml_code} />


## The good and the bad
Yeah good luck copying and pasting this code

