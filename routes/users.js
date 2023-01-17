var express = require('express');
var router = express.Router();

// Task 6: Register New user
router.post('/signup', (req, res, next) => {
  console.log("Signup Request");
  res.end();
});

// Task 7: Login as a Registered user
router.post('/login', (req, res, next) => {
  console.log("Login Request");
  res.end();
});

module.exports = router;
