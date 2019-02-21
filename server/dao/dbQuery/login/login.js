const getConnection = require('../../dbConnect/mysqlConnection');

let findByParam = (param_sql,param_where)=>{
    let sql = param_sql;
    let where = [];
    if(param_where) where = param_where;

    return new Promise((resolve, reject) => {
        getConnection(sql,where,function (err, rows) {
            if(err){
                reject(err)
            }
            if(rows){
                resolve(rows);
            }else {
                resolve([])
            }
        })
    })
};


module.exports = {
    findByParam:findByParam,
}
