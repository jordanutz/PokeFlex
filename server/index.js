const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const controller = require('./pokemon_controller')
const app = express()
app.use(bodyParser.json())
app.use( express.static( `${__dirname}/../build` ) )

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(error => console.log(error))

app.get('/api/pokemon', controller.getPokedex)
app.get('/api/team', controller.getTeam)
app.post('/api/pokemon', controller.createPokemon)
app.delete('/api/pokemon/:id', controller.deleteTeam)

PORT = 1993;
app.listen(PORT, () => {
  console.log(`Blasting off to Port ${1993}`)
})
