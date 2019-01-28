team = []

module.exports = {
  getPokedex: (req, res) => {
    const db = req.app.get('db')
    db.get_pokedex()
    .then(pokedex => res.status(200).send(pokedex))
    .catch(error => console.log(error))
  },

  createPokemon: (req, res) => {
    const {addedPokemon} = req.body
    team.push(addedPokemon)
    res.status(200).send(team)
  }
}
