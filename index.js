const fs = require('fs-extra')

let wasmModule;

( async () => {

    await fs.readFile('./add.wasm')
        .then(bytes => WebAssembly.instantiate(bytes, {}))
        .then(results => wasmModule = {...results.instance.exports})
    
    console.log('wasm module parsed, testing', wasmModule);
    console.log(wasmModule.add_one(1))

})()
