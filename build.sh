rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib add.rs -o add.big.wasm
wasm-gc add.big.wasm add.wasm
rm add.big.wasm