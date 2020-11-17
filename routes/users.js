var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  models.User.findAll({
    include:[{
      model: models.Todo
    }]
  }).then(function (users) {
    res.json(users)
  }).catch((err) => {
    res.send(err)
  })
  })

  router.post('/', function (req, res) {
    models.User.create({
      email: req.body.email,

    }).then(function (user) {
      res.json(user);
    }).catch((err) => {
      res.send(err)

    })
  });
  

  module.exports = router;
