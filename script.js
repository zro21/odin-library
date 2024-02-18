const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary() {
  let title = prompt("What's the title of the book?");
  let author = prompt("Who is the author of the book?");
  let pages = prompt("How many pages does the book have?");
  let read = prompt("Have you read the book?")
  myLibrary.push(new Book(title, author, pages, read));
};