const express = require("express");
const router = express.Router();
const categories_md = require("../models/categories");
const book_md = require("../models/book");
const user_md = require("../models/users");

/* GET home page. */
router.get("/", (req, res, next) => {
  let data = {};
  let resultSet3 = user_md.getTotalUser();
  let resultSet2 = book_md.getTotalBook();
  let resultSet = book_md.getAllBooks();

  resultSet3.then(totals => {
    data.totalUser = totals[0].totalUser;
  })

  resultSet2.then(totals => {
    data.totalBook = totals[0].totalBook
  });

  resultSet
    .then(products => {
      data.products = products;
      res.render("index", {
        data: data
      });
    })
    .catch(err => console.log(err + ""));
});

router.get("/products", (req, res) => {
  let data = {};
  let resultSet = categories_md.getAllCategories();
  let resultSet2 = book_md.getAllBooks();

  resultSet
    .then(categories => (data.categories = categories))
    .catch(err => console.log(err + ""));

  resultSet2
    .then(products => {
      data.products = products;
      res.render("products", {
        data: data
      });
    })
    .catch(err => console.log(err + ""));
});

router.get("/product/:id", (req, res) => {
  let data = {};
  let id = req.params.id;

  let resultSet = categories_md.getAllCategories();
  let resultSet2 = book_md.getBookById(id);

  resultSet
    .then(categories => (data.categories = categories))
    .catch(err => console.log(err + ""));

  resultSet2
    .then(products => {
      data.product = products[0];
      res.render("productdetail", {
        data: data
      });
    })
    .catch(err => console.log(err + ""));
});

router.get('/products/:id', (req, res) => {
  let data = {};
  let category = req.params.id;

  let resultSet = book_md.getBookByCategory(category);
  let resultSet2 = categories_md.getAllCategories();

  resultSet
    .then(products => data.products = products)
    .catch(err => console.log(err + ''));

  resultSet2
    .then(categories => {
      data.categories = categories;
      res.render("products", {
        data: data
      });
    })
    .catch(err => console.log(err + ''));

});

router.get('/checkout', (req, res) => {
  res.render('checkout');
})

router.get("/aboutus", (req, res) => res.render("aboutus"));

router.get("/404error", (req, res) => res.render("404error"));

module.exports = router;