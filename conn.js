var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_rest_api_1"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;