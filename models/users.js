const database = require("../common/database");
const q = require("q");

const connection = database.getConnection();

// các hàm liên quan tới bảng tài khoản
// them tai khoan
const addAccount = account => {
    if (account) {
        let defer = q.defer();

        connection.query("INSERT INTO tai_khoan SET ?", account, (err, result) => {
            if (err) defer.reject(err);
            else {
                defer.resolve(result);
            }
        });
        return defer.promise;
    }
    return false;
};

// các hàm liên quan tới bảng người dùng

let getAllUser = () => {
    let defer = q.defer();
    connection.query(
        "SELECT * FROM nguoi_dung NATURAL JOIN tai_khoan",
        (err, rows) => {
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve(rows);
            }
        }
    );

    return defer.promise;
};

let getUserById = id => {
    let defer = q.defer();
    connection.query(
        "SELECT * FROM nguoi_dung NATURAL JOIN tai_khoan WHERE ma_tai_khoan = ?",
        id,
        (err, rows) => {
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve(rows);
            }
        }
    );

    return defer.promise;
};

const addUser = user => {
    if (user) {
        let defer = q.defer();

        connection.query("INSERT INTO nguoi_dung SET ?", user, (err, result) => {
            if (err) defer.reject(err);
            else {
                //   console.log(sql);
                defer.resolve(result);
            }
        });
        return defer.promise;
    }
    return false;
};

const getTotalUser = () => {
    let defer = q.defer();
    let sql = "SELECT COUNT(ma_tai_khoan) as totalUser FROM nguoi_dung";
    connection.query(sql, (err, result) => {
        if (err) defer.reject(err);
        else defer.resolve(result);
    });
    return defer.promise;
};

module.exports = {
    getAllUser: getAllUser,
    getUserById: getUserById,
    addUser: addUser,
    getTotalUser: getTotalUser,
    addAccount: addAccount
};