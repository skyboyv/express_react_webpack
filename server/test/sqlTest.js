let answer = require('../dao/dbQuery/answer/answerSql');

async function test() {
    let sql = 'select * from answer where id = ?';
    let param = '1291535512861894';
    let info =await answer.findOne(sql,param);
    console.log(info);
}
test();
