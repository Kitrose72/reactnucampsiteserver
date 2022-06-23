const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Promotion get');
})
.post((req, res) => {
    res.end(`Promotion post`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('Promotion put');
})
.delete((req, res) => {
    res.end('Promotion delete');
});

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('promotion id get');
})
.post((req, res) => {
    res.end(`promotion id post`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('promotion id put');
})
.delete((req, res) => {
    res.end('promotion id delete');
});

module.exports = promotionRouter;