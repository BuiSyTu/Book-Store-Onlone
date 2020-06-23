const database = require("../common/database");
const q = require("q");

const connection = database.getConnection();

let getAllCategories = () => {
  let defer = q.defer();
  connection.query("SELECT * FROM the_loai", (err, rows) => {
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(rows);
    }
  });
  return defer.promise;
};

module.exports = {
  getAllCategories: getAllCategories
};
