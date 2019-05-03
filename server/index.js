const express = require('express')
const app = express()
const products = require('../products.json')
const getProducts = require('./getProducts')

app.get('/api/products/:id', getProducts)

app.get(`/api/products`, (req, res) => {
    if (req.query.price) {
        let filtered = products.filter((val) => {
            val.price > req.query.price
        })
        res.status(200).send(filtered)
    } else {
        res.status(200).send(products)
    }
})

// axios.get('/api/products/:id?name=name, {body})

// query = {
//     name: 'Tayte'
// }

// body = {
//     age: 21,
//     gender: male
// }

// params = {
//     id: 8
// }


app.listen(3001, () => {
    console.log('Working!')
})