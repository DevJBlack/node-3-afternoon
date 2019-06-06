module.exports = {
  getAll: (req, res) => {
    let db = req.app.get('db')
    db.read_products().then((response) => {
      console.log(response)
      res.send(response)
    }).catch(err => console.log(err))
  },

  create: (req, res) => {
    let db = req.app.get('db')
    db.create_product(req.body).then((response) => {
      res.send(response)
    }).catch(err => console.log(err))
  },

  getOne: (req, res) => {
    let db = req.app.get('db')
    let { id } = req.params
    db.read_product(id).then((response) => {
      res.send(response)
    }).catch(err => console.log(err))
  },

  update: (req, res) => {
    let db = req.app.get('db')
    let { id } = req.params
    let car  = req.body
    car.id = id
    db.update_product(car).then((response) => {
      res.send(response)
    }).catch(err => console.log(err))
  },

  delete: (req, res) => {
    let db = req.app.get('db')
    let { id } = req.params
    db.delete_product(id).then((response) => {
      res.send(response)
    }).catch(err => console.log(err))
  }

}