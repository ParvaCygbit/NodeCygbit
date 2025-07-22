// File System Module
const fs = require("fs"); // fs is a built-in module in node.js but thid is full module
// const {readFile, readFileSync, writeFile} = require("fs"); // fs is a built-in module in node.js but this is destructuring of fs module
// Read the file asynchronously it is acynchronous function
// acynchronous --> etle aa function pn run thase sathe sathe biju pn function run thase
fs.readFile("./local/readtext.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    throw err; // throw error if any
  }
  console.log("File read content async", data); // this will print the content of the file
});

// Read the file synchronously it is synchronous function
// synchronous --> etle aa function run thase pachi biju function run thase
const test = fs.readFileSync("./local/readtext.txt", "utf8");
console.log("File read content sync", test);

// Write to a file asynchronously
fs.writeFile(
  "./local/writetext.txt",
  "Hello Team, Welcome to Cygbit",
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
      throw err;
    }
  }
);

// Write to a file synchronously
fs.writeFileSync("./local/writetext2.txt", test);
// readstream and writestream we understand later
