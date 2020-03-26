const express = require('express')

const routes = express.Router()

routes.post('/users', (request, response) => {
  return response.json({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Victor GC'
  })
})

module.exports = routes