const express = require('express')

const app = express()
// const serverless = require('serverless-http');  // only for lambda

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(80)

// module.exports.handler = serverless(app);  // only for lambda