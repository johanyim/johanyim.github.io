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
  import CodeSnippet from "$molecules/CodeSnippet.svelte";
</script>
Typically, code snippets embedded into websites like this blog are handled with syntax highlighters like `Prism` or `Highlight.js`, this site in particular is using `Shiki` and it looks something like this:
```rust 
use std::fs;
#[rustfmt::skip]
fn list_dotfile_paths(
    dir_name: &'static str,
) -> impl Iterator<Item = impl Iterator<Item = String>> {

    let directories = dir_name.split_inclusive("/").map(String::from);

    let paths = fs::read_dir(dir_name)
        .unwrap() // TODO: Handle Error
        .flatten()
        .filter_map(move |file| {
            file.path()
                .strip_prefix(dir_name)
                .ok()
                .and_then(|relative_path| 
                    relative_path.to_str().map(String::from))
        })
        .filter(|x| x.starts_with('.'))

    // NOTE: includes directories
    paths.map(move |path| directories.clone().chain(std::iter::once(path)))
}
```
Although it looks like `Shiki` has embedded perfectly normal Rust code into my HTML, 

<CodeSnippet content={code} />
