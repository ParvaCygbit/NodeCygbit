// Path Module
const path = require("path");
const patha = path.extname("../../index.js"); // this will give the extension of the file
console.log("Path extension:", patha);

const pathb = path.basename("./images/arham.png"); // this will give the base name of the file
console.log("Path base name:", pathb);

const pathc = path.dirname("index.js", "./images/arham.png"); // this will give the directory name of the file
console.log("Path directory name:", pathc);
