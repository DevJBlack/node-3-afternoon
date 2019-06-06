const express = require('express')
const massive = require('massive')
require('dotenv').config()
let NPC = require('./controllers/products_controller')

let app = express()

let { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  console.log('db is connected')
  app.set('db', db)
})

app.get('/api/product', NPC.getAll)
app.post('/api/product', NPC.create)
app.get('/api/product/:id', NPC.getOne)
app.put('/api/product/:id', NPC.update)
app.delete('/api/product/:id', NPC.delete)

app.listen(SERVER_PORT, () => {
  console.log('listening on port', SERVER_PORT)
})