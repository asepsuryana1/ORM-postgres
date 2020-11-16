var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  models.user.findAll({}).then(function (user) {
    res.json(user)
  }).catch((err) => {
    res.send(err)
  })
  })

  router.post('/', function (req, res) {
    models.user.create({
      email: req.body.email,

    }).then(function (user) {
      res.json(user);
    }).catch((err) => {
      res.send(err)

    })
  });

  module.exports = router;
