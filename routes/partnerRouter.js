const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('partner get');
})
.post((req, res) => {
    res.end(`partner post`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('partner put');
})
.delete((req, res) => {
    res.end('partner delete');
});

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('partner id get');
})
.post((req, res) => {
    res.end(`partner id post`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('partner id put');
})
.delete((req, res) => {
    res.end(`partner id delete`);
});

module.exports = partnerRouter;