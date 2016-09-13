/**
 * Created by chenjianhui on 16/4/28.
 */

var setting = {};
var baseDir = __dirname;

//工程目录
setting.workspace = "/Users/chenjianhui/WebstormProjects/code_download";

//根目录
setting.projectDir = baseDir + "/../";


setting.mysql = {
    host:"120.26.240.207",
    username:"root",
    password:"chen0704jianhui",
    database:"page_store",
    port:3306
}


module.exports = setting;