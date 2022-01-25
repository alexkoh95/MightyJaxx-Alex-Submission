const express = require("express");

const router = express.Router();

// // Signup
const signupRoute = require("./Signup-Route");
router.use(signupRoute);

// Signin
const signinRoute = require("./Signin-Route");
router.use(signinRoute);

// Item Create
const createItemRoute = require("./Item-Create");
router.use(createItemRoute);

// Item Read
const displayAllItemsRoute = require("./Item-Read");
router.use(displayAllItemsRoute);

// Item Update
const editItems = require("./Item-Update");
router.use(editItems);

// Item Delete
const deleteItem = require("./Item-Delete");
router.use(deleteItem);

module.exports = router;
