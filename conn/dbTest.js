/**
 * Created by chenjianhui on 16/5/12.
 */
var dbTool = require("./DBTool");

var insert = "insert into test(name) values('chen')";

var data = [];
data.name = "chen";
data.link = "baidu.com";

//var data2 = ["chen","yang"];

dbTool.insert(insert,data,function(err,returnBack){
    if(err){
        console.log(err);
        return
    }
    console.log(returnBack);
});

