var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/', controller.getAll);
router.put('/:id', controller.putPost);
router.delete('/', controller.deletePost);
router.post('/', controller.postPost);

module.exports = router;