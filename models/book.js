const database = require("../common/database");
const q = require("q");

const connection = database.getConnection();

let getAllBooks = () => {
    let defer = q.defer();
    connection.query("SELECT * FROM sach NATURAL JOIN the_loai", (err, rows) => {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(rows);
        }
    });

    return defer.promise;
};

let getBookById = id => {
    let defer = q.defer();
    connection.query("SELECT * FROM sach NATURAL JOIN the_loai WHERE ma_sach = ?", id, (err, rows) => {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(rows);
        }
    });
    return defer.promise;
};

const addBook = sach => {
    if (sach) {
        let defer = q.defer();

        connection.query(
            "INSERT INTO sach SET ?",
            sach,
            (err, result) => {
                if (err) defer.reject(err);
                else {
                    //   console.log(sql);
                    defer.resolve(result);
                }
            }
        );
        return defer.promise;
    }
    return false;
};

const getBookByCategory = category => {
    let defer = q.defer();
    connection.query("SELECT * FROM sach NATURAL JOIN the_loai WHERE sach.ma_the_loai = ?", category, (err, rows) => {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(rows);
        }
    });
    return defer.promise;
}

const getTotalBook = () => {
    let defer = q.defer();
    let sql = "SELECT SUM(so_luong) as totalBook FROM sach";
    connection.query(sql, (err, result) => {
        if (err) defer.reject(err);
        else defer.resolve(result);
    });
    return defer.promise;
};

module.exports = {
    getAllBooks: getAllBooks,
    getBookById: getBookById,
    addBook: addBook,
    getBookByCategory: getBookByCategory,
    getTotalBook: getTotalBook
};