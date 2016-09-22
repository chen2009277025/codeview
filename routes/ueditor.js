/**
 * Created by chenjianhui on 16/9/21.
 */
var express = require('express');
var router = express.Router();
var ueditor = require("ueditor");
var Article = require("../bean/article");
var UeditorService = require(__dirname+"/../service/ueditorService");

router.use('/uploadImg', ueditor("public", function (req, res, next) {
    // ueditor 客户发起上传图片请求
    if (req.query.action === 'uploadimage') {
        var foo = req.ueditor;

        var imgname = req.ueditor.filename;

        var img_url = '/images/ueditor/';
        res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/images/ueditor/';
        res.ue_list(dir_url);  // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {

        res.setHeader('Content-Type', 'application/json');
        res.redirect('/plugins/ueditor/ueditor.config.json')
    }
}));


router.use("/saveArticle",function(req,res,next){
    var title = req.param("title");
    var content = req.param("content");
    var tag = req.param("tag");
    var article = Article.getInstance(title,content,tag);
    UeditorService.saveArticle(article);
    res.redirect("/");
})

module.exports = router;

