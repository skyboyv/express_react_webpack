let login = require('../dao/dbQuery/login/login');
const MD5ToPassWord = require('../util/MD5');
module.exports = {
    async LoginIn(req,res,next){
        let values = req.body.param;
        let username = values['userName'];
        let password = await MD5ToPassWord(values['password']);
        let param = [username, password];
        let sql = 'select ID from users where USERNAME = ? and PASSWORD = ?';
        let userInfo = await login.findByParam(sql, param);
        if (userInfo.length > 0) {
            res.send({status: 1, message: '登录成功'})

        } else {
            res.send({status: 0, message: '用户名或密码错误,请重新输入'})
        }
    },
    async selectUserList(req,res,next){
        let sql = 'select ID,USERNAME,USERNO,EMAIL,CREATEDATE from users limit 0,10';

        let param = [];
        let userInfo = await menuSql.findAll(sql,param);

        res.json({status: 1,data:userInfo})
    }
};
