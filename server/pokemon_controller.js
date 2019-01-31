module.exports = {
  getPokedex: (req, res) => {
    const db = req.app.get('db')
    db.get_pokedex()
    .then(pokedex => res.status(200).send(pokedex))
    .catch(error => console.log(error))
  },

  createPokemon: (req, res) => {
    // console.log('req body', req.body)
    const {id} = req.body
    const db = req.app.get('db')
    db.create_team(id)
    .then(team => res.status(200).send(team))
    .catch(error => console.log(error))
  },

  getTeam: (req, res) => {
    const db = req.app.get('db')
    db.get_team()
    .then(team => res.status(200).send(team))
    .catch(error => console.log(error))
  },

  deleteTeam: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_pokemon(id)
    .then(team => res.status(200).send(team))
    .catch(error => console.log(error))
  },

  getWeakness: (req, res) => {
    const db = req.app.get('db')
    db.get_weakness()
    .then(stats => res.status(200).send(stats))
    .catch(error => console.log(error))
  },

  getResistance: (req, res) => {
    // console.log('hit')
    const db = req.app.get('db')
    db.get_resistance()
    .then(stats => res.status(200).send(stats))
    .catch(error => console.log(error))
  }
}
