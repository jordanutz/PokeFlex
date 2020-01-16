
module.exports = {

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
    .then(team => {res.status(200).send(team)})
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
    const {type, evolution, team, filter, dex, deleted} = req.body

    db.get_pokedex()
    .then(pokedex => {

      // Pulls the full Pokedex from the database. Filters depending on whether or not Pokemon is in team. If present in team, will remove from the Pokedex array. 

      let filteredPokedex = pokedex.filter(pokemon => {
        let found = team.find(element => element.id === pokemon.id)
        return found ? false : true
      })

      // If filter is truthy, meaning that the user is actively filtering through the pokedex instead of adding or removing from their team, will take the pokedex that has already filtered out the team members and filter through it. 

      let finalPokedex = filteredPokedex.filter( (pokemon, index, array) => {

        if (filter) {
          return type.indexOf(pokemon.type) === -1 &&
          evolution.indexOf(pokemon.evolution) === -1

        } else {
          if (dex.length) {
            if (deleted) {
              dex.push(deleted)
            }

            let found = dex.find(element => element.id === pokemon.id)
            return found ? true : false
          } else {
            return pokemon
          }
        }
      })

      res.status(200).send(finalPokedex)

    })
    .catch(err => console.log(err))
  }
}


