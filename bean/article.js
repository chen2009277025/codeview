/**
 * Created by chenjianhui on 16/9/21.
 */

var Article = function(title,content,tag,createtime){
    var art = {
        title:title,
        content:content,
        tag:tag,
        createtime:createtime?createtime:(new Date()).getTime(),
        readtimes:0,
        shreatimes:0
    }

    return art;
}

Article.getInstance = function(title,content,tag){
    return Article(title,content,tag);
}

Article.getBeans = function(sqlArr){
    var arts = [];
    if(sqlArr && sqlArr.length > 0){
        sqlArr.map(function(item){
            arts.push(Article(item.title,item.content,item.tag,item.createtime))
        })
    }
    return arts;
}


module.exports = Article;
