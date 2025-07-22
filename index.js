// import express from "express";

console.log("hello We are here");
// console.log(window); // it s working in broswer but not in node "window" is broswer global object

const a = 20;
console.log("math", a + 20);

const b = {
  average: (x, y) => {
    return (x + y) / 2;
  },
  percent: (x, y) => {
    return (x / y) * 100;
  },
};

module.exports = { a, b };
