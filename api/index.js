var express = require('express');
var router = express.Router();
var usuarioModule = require('./usuario');
var postModule = require('./posts');

router.use('/usuario', usuarioModule);
router.use('/post', postModule);

module.exports = router;