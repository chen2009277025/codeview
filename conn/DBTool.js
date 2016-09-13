/**
 * Created by chen on 15-7-1.
 */
/*数据库链接工具类*/

var mysql = require("mysql");

var conf = require("./../setting/setting");

/***
 * 创建sql线程池
 */
var mysql_pool = mysql.createPool({
    host: conf.mysql.host,
    user: conf.mysql.username,
    password: conf.mysql.password,
    database: conf.mysql.database,
    port: conf.mysql.port
});

var DbTool = {};

/***
 * 构造sql参数
 * @param sql
 * @param data  可以单纯的传值:['chen','男'],或者键值对的形式,data["name"] = "chen";data["gender"] = "男";
 * @returns {*}
 */
DbTool.makeSql = function (sql, data) {

    if (!sql) {
        return "";
    }

    //如果sql为空,则返回当前的sql语句
    if(data == undefined){
        return sql;
    }
    //make map
    var params_map = [];

    //如果join返回不为空,就是单纯值的数组
    if(data.join()){
        var params = sql.substring(sql.indexOf("(") + 1, sql.indexOf(")", sql.indexOf("("))).split(",");
        if (params.length != data.length) {
            console.log("sql参数个数不正确");
            return "";
        }

        for (var i = 0; i < params.length; i++) {
            params_map[params[i]] = data[i];
        }
    }else{
        params_map = data;
    }

    for (var key in params_map) {
        sql = sql.replace("#" + key + "#", params_map[key]);
    }
    return sql;
}

//插入的方法
DbTool.insert = function (sql, callBack) {
   // sql = this.makeSql(sql, data);
    if (!sql) {
        throw new Error("sql出错了");
    }
    mysql_pool.getConnection(function (err, conn) {
        conn.query(sql, function (err, returnBack) {
            if (err) {
                throw err;
            }
            console.log(returnBack);
            if (callBack) {
                callBack(err, returnBack);
            }
        });
        conn.release();
    })
}

//查询
DbTool.select = function (sql,callBack) {
    //sql = this.makeSql(sql, data);
    if (!sql) {
        throw new Error("sql出错了");
    }
    mysql_pool.getConnection(function (err, conn) {
        conn.query(sql, function (err, reSet) {
            if (err) {
                throw err;
            }
            if (callBack) {
                callBack(err, reSet);
            }
        });
        conn.release();
    })
}

//删除
DbTool.delete = function (sql, data, callBack) {
    sql = this.makeSql(sql, data);
    if (!sql) {
        throw new Error("sql出错了");
    }
    mysql_pool.getConnection(function (err, conn) {
        conn.query(deleteSql, function (err, returnBack) {
            if (err) {
                throw err;
            }
            if (callBack) {
                callBack(err, returnBack);
            }
        });
        conn.release();
    })
}
//更新函数
DbTool.update = function (sql, callBack) {
    sql = this.makeSql(sql, data);
    if (!sql) {
        throw new Error("sql出错了");
    }
    mysql_pool.getConnection(function (err, conn) {
        conn.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
            if (callBack) {
                callBack(err, result);
            }
        });
        conn.release();
    })
}

module.exports = DbTool;
