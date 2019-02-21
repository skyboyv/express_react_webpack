const express = require('express');
const router = express.Router();
const loginRouter = require('./login');
const menu = require('./menu');

router.post('/', function (req, res, next) {
    res.render('index', {title: 'express_react_webpack'});
});
router.post('/login', loginRouter);
router.post('/menu', menu);

module.exports = router;
