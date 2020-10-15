const express = require('express')
const routes = require('./routes/index')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:false}))

app.use((req, res, next) => {
	req.timestamp = new Date().toString()
	next()
})

app.use('/', routes)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hjs')

// #1 - In package.json, added a ' start": "node index.js" ' to the scripts {}
// #2 - This is to allow the dynamic association of the PORT - READY TO DEPLOY TO CLOUD
let port = process.env.PORT || 5000;

app.listen(port);

// #3 backtick to allow string templates
console.log(`Server running on http://localhost:${port}`)
