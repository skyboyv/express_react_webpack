const crypto = require('crypto'); //加载加密文件
module.exports = (_passWord) => crypto.createHash('md5').update(_passWord).digest('hex');
