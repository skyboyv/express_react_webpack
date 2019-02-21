let async = require("async");

let menuSql = require('../dao/dbQuery/menu/menuSql');
// let init = (req,res,next) => {
//     res.render('index', {title:'express_react_webpack'});
// };

let selectParentMenuList = async (req,res,next) => {
    let sql = 'select ID,MENUNO,MENUNAME,MENUURL from menu where MENUTYPE = ?';

    let param = [0];
    let info = await menuSql.findAll(sql,param);
    let childListSql = 'select ID,MENUNO,MENUNAME,MENUURL,COMPONENT FROM menu WHERE FATHERMENUNO = ? and MENUTYPE = ?';
    async.map(info,async function (item,index){
        let paramChild = [item.MENUNO,1];
        let childListInfo = await menuSql.findAll(childListSql,paramChild);
        item.childList = childListInfo;
        return item;
    },function (err, result) {
        res.json({status: 1,data:result})
    });
}




module.exports = {
    // init:init,
    selectParentMenuList:selectParentMenuList,
}
