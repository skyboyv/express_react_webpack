const express = require('express');
const router = express.Router();
let menuController = require('../controller/MenuController');

// router.post('/', async function (req, res, next) {
//     await menuController.init(req, res, next);
// });

router.post('/findMenuList', async function (req, res, next) {
    await menuController.selectParentMenuList(req,res,next);
});

module.exports = router;
