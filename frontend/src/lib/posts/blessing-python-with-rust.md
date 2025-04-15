---
title: Using Rust to make a Python library with PyO3 and Maturin
description: Blessing my Python-brain colleagues with Rust
date: 2025-03-19
categories: 
- rust
- python 
- pyo3
published: true
thumbnail: https://wanderingtrader.com/wp-content/uploads/2014/03/Crab-Galapagos-Islands.jpg
---

## Installing everything we need


1\. Install a virtual environment manager of your choice (`conda`, `pyenv`, `venv`, etc.). I like to use [`poetry`](https://python-poetry.org/) because of the parallels it has with Rust's `cargo`.

In the case of poetry, you can run in the terminal (Linux/MacOS/WSL only):

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

2\. Install `maturin`

```bash
cargo install maturin
```

3\. Install `cargo-watch` (Optional)

```bash
cargo install cargo-watch
```


## Setting up the environment


You will need to be within a python virtual environment to run most `maturin` CLI commands for development. Anything that would set the `$VIRUTAL_ENV` environment variable in the terminal will work.

Using `poetry`, it would be the following:

```bash
maturin new <name_of_lib> 
# Select the option 'pyo3' as the binding to use
cd <name_of_lib> 
mkdir python 
cd python
poetry init
eval $(poetry env activate)
```


Your project structure might will look like this:

```sh
<name_of_lib>
├── Cargo.lock
├── Cargo.toml
├── pyproject.toml
├── python  # You are here
│  └── pyproject.toml
├── src
│  └── lib.rs
└── target
```

## Developing our Maturin package

Return to the root directory (`<name_of_lib>`) and execute: 

```bash
maturin develop
```

This will install the crate as a module in the current virtual environment. 

*Note*: Remember to call enter/activate the virtual environment if you have spawned a new shell to execute the command

If this is the first time this has been run, you will notice a `target` directory that has been generated. In fact, by navigating to `<name_of_lib>/target/debug`, you can see the `.so` file that has generated in debug mode.

### (Optional) automatic re-building with `cargo-watch`

Running `maturin develop` every time is for losers. You can watch for changes in the rust directory by using the `cargo-watch` command.

```bash
cargo watch -i python -s 'maturin develop'
```


