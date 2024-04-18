const router = require('express').Router();
let Book = require('../models/booklist.model');

router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
  title = req.body.title;
  author = req.body.author;
  description = req.body.description;

  // create a new Book object
  const newBook = await new Book({
    title,
    author,
    description
  });

  console.log(newBook);
  // save the new object (newBook)
  newBook
    .save()
    .then(() => res.json('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Book.findById(req.params.id)
    .then((books) => {
      res.json(books);
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete(async (req, res) => {
  console.log('delete logged');
  await Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Activity deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post(async (req, res) => {
  console.log(req.params.id);
  await Book.findById(req.params.id)
    .then((books) => {
      books.title = req.body.title;
      books.author = req.body.author;
      books.description = req.body.description;

      books
        .save()
        .then(() => res.json('book updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
