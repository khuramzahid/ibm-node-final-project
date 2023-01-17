var express = require('express');
const axios = require('axios');
var booksRouter = express.Router();

// Task 1: Get the book list available in the shop
booksRouter.get('/', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get(
    'http://localhost:3001/books'
  );
  res.json(books.data);
});

// Task 2: Get the books based on ISBN using Promises
booksRouter.get('/isbn/:isbn', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get(
    `http://localhost:3001/books?isbn=${req.params.isbn}`
  );
  res.json(books.data);
});

// Task 3: Get all books by Author
booksRouter.get('/author/:author', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get(
    `http://localhost:3001/books?author=${req.params.author}`
  );
  res.json(books.data);
});

// Task 4: Get all books based on Title
booksRouter.get('/title/:title', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get(
    `http://localhost:3001/books?author=${req.params.title}`
  );
  res.json(books.data);
});

// Task 5: Get book Review
booksRouter.get('/:bookId/reviews/:reviewId', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const books = await axios.get(
    `http://localhost:3001/reviews?bookId=${req.params.bookId}&id=${req.params.reviewId}`
  );
  res.json(books.data);
});

// Registered Users
// Task 8: Add/Modify a book review
booksRouter.post('/:bookId/reviews', async (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  const reviews = await axios.get(
    'http://localhost:3001/reviews'
  );
  await axios.post(
    'http://localhost:3001/reviews', 
    {
      id: reviews.data.length + 1,
      bookId: req.params.bookId,
      review: req.body.review
    }
  );
  res.status(200).send("Review Added.");
});

booksRouter.put('/:bookId/reviews/:reviewId', async (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  const reviews = await axios.get(
    `http://localhost:3001/reviews?bookId=${req.params.bookId}&id=${req.params.reviewId}`
  );
  await axios.post(
    'http://localhost:3001/reviews', 
    {
      id: reviews.data.length + 1,
      bookId: req.params.bookId,
      review: req.body.review
    }
  );
  res.status(200).send("Review Added.");
});

// Registered Users
// Task 9: Delete book review added by that particular user
booksRouter.delete('/:bookId/reviews/:reviewId', async (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  await axios.delete(
    `http://localhost:3001/reviews?bookId=${req.params.bookId}&id=${req.params.reviewId}`
  );
  res.status(200).send("Review Deleted.");
});

module.exports = booksRouter;
