const express = require('express');
const newpostRouter = express.Router();

const { newpostController } = require('../controller');
const { create } = newpostController;

newpostRouter.post('/:id', create);

module.exports = newpostRouter;
