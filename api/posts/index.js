var express = require('express');
var router = express.Router();
var controller = require('./controller');
var auth = require('../auth');

router.get('/', controller.getAll);
router.get('/populated', controller.getAllPopulated);
router.put('/:id', controller.putPost);
router.delete('/', controller.deletePost);
router.post('/', controller.postPost);

module.exports = router;