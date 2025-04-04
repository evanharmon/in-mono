# RUST CARGO-CHEF

## Resources
- [Github cargo-chef](https://github.com/LukeMathWalker/cargo-chef)

## Features
Cache the dependencies of your Rust project and speed up your Docker builds.

## Limitations
- not meant to be run locally
- still need to copy in `/src`

## Best practices
- prepare and cook should be in separate stages of a Dockerfile

## Commands

### Prepare
analyzes your project's dependencies (using Cargo.toml and Cargo.lock) and generates a recipe.json file, which is a dependency tree, enabling efficient caching of build steps for faster Docker builds. 

`cargo chef prepare --recipe-path recipe.json`

### Cook
builds the project's dependencies, leveraging Docker layer caching for faster builds by using a JSON recipe generated by cargo chef prepare.

`cargo check cook --release --recipe-path recipe.json`

## Gotcha

### cargo cook
`cargo cook` modifies files! Never run this with a docker bind mount! It'll clear out your `main.rs`.
Then you're app will run, immediately close, and you'll never know what is going on!!