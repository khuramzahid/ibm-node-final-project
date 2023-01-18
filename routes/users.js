var express = require('express');
var jwt = require('jsonwebtoken');
const axios = require('axios');
var router = express.Router();

// Task 6: Register New user
router.post('/signup', async (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  try {
    await axios.post(
      'http://localhost:3001/users', 
      {
        username: req.body.username,
        password: req.body.password
      }
    );
    res.status(200).send("User Created.");
  }
  catch(err) {
    res.status(500).send(err.message);
  }
});

// Task 7: Login as a Registered user
router.post('/login', async (req, res, next) => {
  const storedUser = await axios.get(
    `http://localhost:3001/users?username=${req.body.username}`
  );
  if(storedUser) {
    if(storedUser.data[0].password == req.body.password) {
      const user = { name: req.body.username };
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({ accessToken });
    }
    else {
      res.setHeader('Content-Type', 'text/plain');
      res.status(401).send('Unauthenticated.');
    }
  }
  else {
    res.setHeader('Content-Type', 'text/plain');
    res.status(401).send('User not found.');
  }
});

module.exports = router;