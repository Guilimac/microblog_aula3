var express = require('express');
var router = express.Router();
var usuarioModule = require('./usuario');
var postModule = require('./posts');
var auth = require('./auth');

router.use('/usuario', auth, usuarioModule);
router.use('/post', auth, postModule);

module.exports = router;