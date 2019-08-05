// const helpers = require('./helpers');
const { sum } = require('./helpers');

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("hello world from nodejs");
// });

// server.listen(3000);

const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("test from express")
})

app.listen(3000)

const total = sum(10, 200);

console.log("Total: " + total);