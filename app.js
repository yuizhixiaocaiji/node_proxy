// 引入express和mysql模块
const express = require("express");
const mysql = require("mysql");

// 创建一个express实例
const app = express();

// 使用mysql模块连接数据库
const connection = mysql.createConnection({
  host: "localhost", // 数据库的地址
  user: "root", // 数据库的用户名
  password: "343527", // 数据库的密码
  port: "3306", // 数据库的端口
  database: "student", // 数据库的名字
});

// 连接数据库
connection.connect();

// 定义一个get接口，接收请求参数，执行数据库操作，返回响应数据
app.get("/api/class", (req, res) => {
  // 获取请求参数
  const name = req.query.name;
  // 定义一个sql语句
  const sql = `select * from class`;
  // 执行sql语句
  connection.query(sql, (err, result) => {
    if (err) {
      // 如果有错误，返回错误信息
      res.send(err.message);
    } else {
      // 如果没有错误，返回查询结果
      res.send(result);
    }
  });
});

// 启动服务器，监听3000端口
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
