const express = require('express')
const router = express.Router()

//All author route

router.get('/', (req, res) => {
    res.render('authors /index')
})

//New author route

router.get('/new', (req, res) => {
    res.render('authors/new')
})

//Create author route

route.post('/', (req, res) => {
    res.send('Create')
})






module.exports = router