const express = require('express');
const router = express.Router();

const { postController, newpostController } = require('../controller');
const { getAll, findById, updateById, deleteById } = postController;
const { create } = newpostController;

router.get('/', getAll);
router.get('/posts', getAll);
router.get('/posts/:id', findById);
router.put('/posts/:id', updateById);
router.delete('/posts/:id', deleteById);

router.post('/newpost', create);

module.exports = router;