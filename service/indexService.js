/**
 * Created by chenjianhui on 16/8/26.
 */

var dbTool = require(__dirname + "/../conn/DBTool");

var IndexService = {
    getPages:function(callback){
        var selectSql = "select * from pages"
        dbTool.select(selectSql,function(err,res){
            if(err){
                return console.log(err);
            }
            return callback(res);
        })
    }
}

module.exports = IndexService;