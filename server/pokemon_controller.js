module.exports = {
  getPokedex: (req, res) => {
    const db = req.app.get('db')
    db.get_pokedex()
    .then(pokedex => res.status(200).send(pokedex))
  }
}
