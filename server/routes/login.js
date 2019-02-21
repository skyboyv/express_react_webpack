const express = require('express');
const router = express.Router();


let LoginController = require('../controller/LoginController');

router.post('/',function (req, res, next) {
    res.render('index',{'title':'登录'});
});
router.post('/loginIn', async function (req, res, next) {
    await LoginController.LoginIn(req, res, next);
});
router.post('/findUserList', async function (req, res, next) {
    await LoginController.selectUserList(req,res,next);
});

module.exports = router;
