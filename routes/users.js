var express = require('express');
var router = express.Router();
var db = require('../model/db.config.js');

/*
 res.render => this method is for the use of directory views
 That is to say, server side returns a 'page' with some information to the client side
 res.send => this method is usually for the use of sending 'json data' or something like that
*/

// selectOne
router.get('/user/:id', (req, res, next) => {
  db.select([req.params.id], function (results, fields) {
    res.render('index', { result: results });
    // res.send(results);
  });
});

// selectAll
router.get('/user', (req, res, next) => {
  db.select([], function (results, fields) {
    res.render('index', { result: results });
    // res.send(results);
  });
});

// TODO: update
router.put('/user', (req, res, next) => {

});

// TODO: delete
router.delete('/user/:id', (req, res, next) => {

});

// TODO: insert
router.post('/user', (req, res, next) => {

});


module.exports = router;