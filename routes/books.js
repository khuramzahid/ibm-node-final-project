var express = require('express');
const axios = require('axios');
var booksRouter = express.Router();

// Task 1: Get the book list available in the shop
booksRouter.get('/', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get('http://localhost:3001/books');
  res.json(books.data);
});

// Task 2: Get the books based on ISBN using Promises
booksRouter.get('/isbn/:isbn', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get(`http://localhost:3001/books?isbn=${req.params.isbn}`);
  res.json(books.data);
});

// Task 3: Get all books by Author
booksRouter.get('/author/:author', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  console.log(req.params.author);
  let author = req.params.author.split().reduce((acc, curr) => {
    console.log(acc, curr);
    if(curr === ' ')
      acc += '%20';
    else
      acc += curr;
  }, '');
  console.log(author);
  const books = await axios.get(`http://localhost:3001/books?author=${author}`);
  res.json(books);
});

// Task 4: Get all books based on Title
booksRouter.get('/title/:title', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get('http://localhost:3001/books');
  res.json(books);
});

// Task 5: Get book Review
booksRouter.get('/:bookId/reviews/:reviewId', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get('http://localhost:3001/books');
  res.json(books);
});

// Registered Users
// Task 8: Add/Modify a book review
booksRouter.post('/:bookId/reviews', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get('http://localhost:3001/books');
  res.json(books);
});

booksRouter.put('/:bookId/reviews/:reviewId', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get('http://localhost:3001/books');
  res.json(books);
});

// Registered Users
// Task 9: Delete book review added by that particular user
booksRouter.delete('/:bookId/reviews/:reviewId', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get('http://localhost:3001/books');
  res.json(books);
});

module.exports = booksRouter;
