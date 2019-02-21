const crypto = require('crypto'); //加载加密文件
const MD5 = crypto.createHash('md5');
let MD5ToPassWord = (str)=>{ //暴露出md5s方法
    MD5.update(str);
    str = MD5.digest('hex');
    return str;
};



console.log(MD5.update('123').digest('hex'))
