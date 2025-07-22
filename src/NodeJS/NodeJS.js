const { a, b } = require("../../index.js");
const avg = b.average(10, 20);
const per = b.percent(10, 20);
console.log("in app", a);
console.log("in app avg per", avg, per);