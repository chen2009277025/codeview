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


module.exports = Article;
