let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function renderCard(book) {
  const card = document.createElement("div");
  card.classList.add("bookCard");
  const container = document.querySelector(".books");
  container.appendChild(card);

  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("p");

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);

  if (book.read === true) {
    read.textContent = "Read";
    read.setAttribute("style", "background-color: green");
  } else {
    read.textContent = "Un-read";
    read.setAttribute("style", "background-color: red");
  }
}

function displayBooks() {
  for (const book of myLibrary) {
    renderCard(book); //Loop through the array and create a card for each book
  }
}

const addBookBtn = document.querySelector(".addBook");
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".formContainer");
const submitBookBtn = document.querySelector(".submitBtn");
overlay.classList.toggle("invisible");
form.classList.toggle("invisible");

function toggleForm() {
  overlay.classList.toggle("invisible");
  form.classList.toggle("invisible");
}

addBookBtn.addEventListener("click", () => {
  toggleForm();
}); // Bring up new book form on click

submitBookBtn.addEventListener("click", () => {
  toggleForm();
}); // Get rid of form when submitting it

// Manually added books for testing purposes
addBookToLibrary("Harry Potter", "JK Rowling", 456, false);
addBookToLibrary("LOTR", "Tolkien", 2265, true);
addBookToLibrary("The Shining", "Stephen King", 345, false);
addBookToLibrary("Harry Potter", "JK Rowling", 456, false);
addBookToLibrary("LOTR", "Tolkien", 2265, true);
addBookToLibrary("The Shining", "Stephen King", 345, false);
displayBooks(myLibrary);

// Open a form with 4 inputs, name, author, pages, read
// When the submit button is clicked, take these inputs and store them in the array as a new book
