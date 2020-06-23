var express = require("express");
var router = express.Router();
var importRandom = require("../models/importRandom");
var book_md = require("../models/book");
var user_md = require("../models/users");
var dateformat = require("dateformat");

router.get("/", (req, res) => {
    res.render("admin/admin", {
        data: {}
    });
});

// giao dien load sach
router.get("/sach", (req, res) => {
    let data = {};
    let resultSet = book_md.getAllBooks();
    resultSet
        .then(sach => {
            data.sach = sach;
            res.render("admin/sach/index", {
                data: data
            });
        })
        .catch(err => {
            console.log(err);
        });
});

// giao dien load nguoi dung
router.get("/users", (req, res) => {
    let data = {};
    let resultSet = user_md.getAllUser();
    resultSet
        .then(users => {
            // convert datetime trong sql
            for (let i = 0; i < users.length; i++) {
                users[i].ngay_sinh = dateformat(users[i].ngay_sinh, "dd-mm-yyyy");
            }
            data.users = users;
            res.render("admin/users/index", {
                data: data
            });
        })
        .catch(err => {
            console.log(err);
        });
});

// giao dien load hoa don
router.get("/bills", (req, res) => {
    res.render("admin/bills/index", {
        data: {}
    });
});

router.get("/random/sach", (req, res) => {
    importRandom.addRandomSach();
    res.json("add random sach success");
});

router.get("/random/user", (req, res) => {
    importRandom.addRandomUser();
    res.json("add random user success");
});

module.exports = router;