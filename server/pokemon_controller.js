module.exports = {
  getPokemon: (req, res) => {
    const db = req.app.get('db')
    const {team} = req.body

    db.get_pokedex().then(pokedex => {
      let myPokedex = pokedex.filter( (pokemon, index) => {
        let found = team.find(element => element.id === pokemon.id)
        return found ? false : true
      })
      res.status(200).send(myPokedex)
    })
    .catch(error => console.log(error))
  },

  createPokemon: (req, res) => {
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
    const db = req.app.get('db')
    db.get_resistance()
    .then(stats => res.status(200).send(stats))
    .catch(error => console.log(error))
  },

  filterPokemon: (req, res) => {
    const db = req.app.get('db')
    const {type, evolution, dex, team} = req.body

    db.get_pokedex()
    .then(pokedex => {

      let filteredPokedex = pokedex.filter(pokemon => {
        return type.indexOf(pokemon.type) === -1 &&
        evolution.indexOf(pokemon.evolution) === -1
      })

      let finalPokedex = filteredPokedex.filter(pokemon => {
        let found = team.find(element => element.id === pokemon.id)
        return found ? false : true
      })

      res.status(200).send(finalPokedex)

    })
    .catch(error => console.log(error))
  }
}
