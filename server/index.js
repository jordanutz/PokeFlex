const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

const controller = require('./pokemon_controller')
const app = express()

PORT = 1993;
app.listen(PORT, () => {
  console.log(`Blasting off to Port ${1993}`)
})
