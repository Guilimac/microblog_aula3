var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/', controller.getAll);
router.get('/:nome', controller.getByName);
router.put('/:id', controller.putUser);
router.delete('/', controller.deleteUser);
router.post('/', controller.postUser);

module.exports = router;