/**
 * Created by chenjianhui on 16/9/21.
 */
var dbTool = require(__dirname + "/../conn/DBTool");

var UeditorService = {
    saveArticle:function(article,callback){
        var insertSql = "insert into article(content,tag,title) values('"+article.content+"'," +
            "'"+article.tag+"','"+article.title+"')";
        dbTool.insert(insertSql,function(err,res){
            if(err){
                return console.log(err);
            }
            if(callback){
                callback(res)
            }
        })
    },
    getArticleById:function(id,callback){
        var selectSql = "select * from article where id="+id;
        dbTool.insert(selectSql,function(err,res){
            if(err){
                return console.log(err);
            }
            if(callback){
                callback(res)
            }
        })
    }
}

module.exports = UeditorService;