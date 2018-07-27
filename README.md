# RUST-WASM example in browser and NodeJS

## Installation \

### Rust

`curl https://sh.rustup.rs -sSf | sh`

`rustup toolchain install nightly`

`cargo install --git https://github.com/alexcrichton/wasm-gc`

`rustup target add wasm32-unknown-unknown --toolchain nightly`

### Node

`npm i`

## Compile wasm module

`./build.sh`

or

`npm run build_wasm` 


## Run

Web: `npm run start_web`

Node: Web: `npm run start_node`