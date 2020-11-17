var express = require('express');
var router = express.Router();
var models = require('../models/index');


// get all todos
router.get('/', function (req, res) {
  models.Todo.findAll({}).then(function (todos) {
    res.json(todos).catch((err) => {
      res.send(err)

    });
  });
});

router.post('/', function (req, res) {
  models.Todo.create({
    title: req.body.title,
    UserId: req.body.userid
  }).then(function (todo) {
    res.json(todo).catch((err) => {
      res.send(err)

    });
  });
});

//get single todos
router.get('/:id', function (req, res, next) {
  models.Todo.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (todo) {
    res.json(todo)
  });
});

//router put or update

router.put('/:id', function (req, res, next) {
  models.Todo.update({
    title : req.body.title,
    complete: req.body.complete }, {
      returning: true,
      where: {
        id: req.params.id
      }
    }).then(function (todo) {
    res.json(todo)
    })
  })

//delete single todo

router.delete('/:id', function (req, res, next) {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (todo) {
    res.json(todo)
  });
});

module.exports = router;
