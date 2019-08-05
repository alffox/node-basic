// const helpers = require('./helpers');
const { sum } = require('./helpers');

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("hello world from nodejs");
// });

// server.listen(3000);

// const express = require('express');
// const app = express()

// app.get('/', (req, res) => {
//     res.send("test from express")
// })

// app.listen(3000)

const fs = require('fs')
const fileName = "target.txt"

//*Synchronous function start - DON'T DO THIS AT HOME!
const data = fs.readFileSync(fileName)
console.log(data.toString());
//*Synchronous function end

// fs.watch(fileName, () => console.log('File Changed!'))

// fs.readFile(fileName, (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// });

console.log('nodejs async programming... ?');

const total = sum(10, 200);

console.log("Total: " + total);