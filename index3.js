const os = require("os");

console.log(os.arch());
console.log(os.platform());
const free = os.freemem()
console.log(`${free/1024/1024/1024}`)
