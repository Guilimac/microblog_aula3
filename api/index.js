var express = require('express');
var router = express.Router();
var usuarioModule = require('./usuario');

router.use('/usuario',usuarioModule);


module.exports = router;