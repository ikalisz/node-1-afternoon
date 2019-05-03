const express = require('express')
const app = express()
const products = require('../products.json')
const getProducts = require('./getProducts')

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProducts)


app.listen(3000, () => {
    console.log('Working!')
})