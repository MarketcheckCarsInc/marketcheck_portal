const express = require('express')
const next = require('next')
const routes = require('./routes')
const cors = require('cors')
const yes = require('yes-https')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 8080
const app = next({ dev })
const handler = routes.getRequestHandler(app)
var robots = require('robots.txt')

// Pass in the absolute path to your robots.txt file
app.prepare().then(() => {
  const server = express()
  server.use(cors(), yes(), robots(__dirname + '/../static/robots.txt')).use(handler).listen(PORT)
  console.log(`> Ready on http://localhost:${PORT}`)
})
