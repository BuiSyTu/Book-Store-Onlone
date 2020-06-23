var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ptpmcn'
});

connection.connect();

const getConnection = () => {
  if (!connection) {
    connection.connect();
  }
  return connection;
}

module.exports = {
  getConnection: getConnection
}