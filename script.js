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

myLibrary[0] = new Book("The Hobbit", "J.R.R. Tolkien", 272, "yes");
myLibrary[1] = new Book("Eragon", "Christopher Paolini", 736, "yes");

function LoopArray() {
  const matches = document.querySelectorAll(".book");
  if (matches !== null) {
    matches.forEach(function(match) {
      match.remove();
    });
  };
  myLibrary.forEach(function(book) {
    const divLibrary = document.querySelector(".library");
    const divBook = document.createElement("div");
    divBook.classList.add("book");
  
    const paraTitle = document.createElement("p");
    paraTitle.textContent = `Title: ${book.title}`;
    divBook.appendChild(paraTitle);
  
    const paraAuthor = document.createElement("p")
    paraAuthor.textContent = `Author: ${book.author}`;
    divBook.appendChild(paraAuthor);
  
    const paraPages = document.createElement("p");
    paraPages.textContent = `Pages: ${book.pages}`;
    divBook.appendChild(paraPages);
  
    const paraRead = document.createElement("p");
    paraRead.textContent = `Read: ${book.read}`;
    divBook.appendChild(paraRead);
  
    divLibrary.appendChild(divBook);
  });
};