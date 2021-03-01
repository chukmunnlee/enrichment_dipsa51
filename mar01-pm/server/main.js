// load the libraries
const morgan = require('morgan')
const cors = require('cors')
const express = require('express')

// load cookies
const COOKIES = require('./fortune-cookie')

// write a function that randomly returns 1 cookie from COOKIES
const getCookie = function() {
	const idx = Math.floor(Math.random() * COOKIES.length)
	return COOKIES[idx]
}

// get a port for the web app
const port = parseInt(process.env.PORT) || 3000

// create an instance of express
const app = express()

// handlers 
// log all request
app.use(morgan('combined'))

// add CORS to all responses
app.use(cors())

// serve the Angular files from __dirname/client
app.use(express.static(__dirname + '/client'))

// GET /, /index.html
//app.get([ '/', '/index.html' ], 
//	(req, resp) => {
//		const cookieText = getCookie()
//		// specify the status code, specify the content-type
//		resp.status(200)
//			.type('text/html')
//			.send(`<h2>${cookieText}</h2>`)
//	}
//)

// GET /api/fortune?n=1
app.get('/api/fortune',
	(req, resp) => {
		// read the query parameter
		let count = parseInt(req.query['n']) || 1
		count = Math.min(count, 5)
		const cookieText = []
		for (let i = 0; i < count; i++)
			cookieText.push(getCookie())

		// status code, content type
		resp.status(200)
			.type('application/json')
			.json({
				cookies: cookieText,
				timestamp: (new Date()).toLocaleString()
			})
	}
)

// start the server
app.listen(port, () => {
	console.info(`Application started on port ${port} at ${new Date()}`)
})
