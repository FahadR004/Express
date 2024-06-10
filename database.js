const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rms"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con; // Export the connection object

 
