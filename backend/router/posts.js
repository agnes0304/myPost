const express = require('express');
const postRouter = express.Router();

const { postController } = require('../controller');
const {getAll, findById, updateById, deleteById } = postController;


postRouter.get('/', getAll);
postRouter.get('/:id', findById);
postRouter.put('/:id', updateById);
postRouter.delete('/:id', deleteById);

module.exports = postRouter;
