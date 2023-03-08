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

function refreshCards() {
  const bookContainer = document.querySelector(".books");
  while (bookContainer.firstChild) {
    bookContainer.firstChild.remove();
  }
} //Removes cards from the page before rendering them to avoid duplicates.

function renderCards(book) {
  const card = document.createElement("div");
  card.classList.add("bookCard");
  const container = document.querySelector(".books");
  container.appendChild(card);

  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readContainer = document.createElement("div");
  const read = document.createElement("input");
  read.setAttribute("type", "checkbox");
  read.setAttribute("id", "readCheckbox");
  const readLabel = document.createElement("label");
  readLabel.setAttribute("for", "readCheckbox");
  const deleteBtn = document.createElement("button");

  title.textContent = "Title: " + book.title;
  author.textContent = "Written by: " + book.author;
  pages.textContent = book.pages + " pages";
  readLabel.textContent = "Read: ";
  deleteBtn.textContent = "\u274C";
  deleteBtn.setAttribute("type", "button");
  deleteBtn.classList.add("deleteBtn");

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(readContainer);
  readContainer.appendChild(readLabel);
  readContainer.appendChild(read);
  card.appendChild(deleteBtn);

  book.read === "true" ? (read.checked = true) : (read.checked = false);

  read.addEventListener("click", () => {
    toggleReadStatus(book, read);
  });

  deleteBtn.addEventListener("click", () => {
    deleteBook(deleteBtn, book, myLibrary);
  });
}

function toggleReadStatus(book, read) {
  read.checked ? (book.read = "true") : (book.read = "false");
}

function deleteBook(btn, book, array) {
  btn.parentNode.remove();
  const index = array.indexOf(book);
  array.splice(index, 1);
}

function displayBooks() {
  refreshCards();
  for (const book of myLibrary) {
    renderCards(book); //Loop through the array and create a card for each book
  }
}

const addBookBtn = document.querySelector(".addBook");
const overlay = document.querySelector(".overlay");
const formContainer = document.querySelector(".formContainer");

overlay.classList.toggle("invisible");
formContainer.classList.toggle("invisible");

function toggleForm() {
  overlay.classList.toggle("invisible");
  formContainer.classList.toggle("invisible");
}

addBookBtn.addEventListener("click", () => {
  toggleForm();
}); // Bring up new book form on click

function clearForm() {
  const textFields = document.querySelectorAll(".textField");
  textFields.forEach((input) => {
    input.value = "";
  });

  const readToggle = document.querySelector("#readToggle");
  readToggle.checked = false;
}

const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookPages = document.querySelector("#pages");
const newBookRead = document.querySelector("#readToggle");
const submitBookBtn = document.querySelector(".submitBtn");

submitBookBtn.addEventListener("click", () => {
  newBookRead.checked === true
    ? (newBookRead.value = true)
    : (newBookRead.value = false);

  let fieldsFull = false;

  if (newBookTitle.validity.valueMissing) {
    alert("What is the book called?");
  } else if (newBookAuthor.validity.valueMissing) {
    alert("Who was the book written by?");
  } else if (newBookPages.validity.valueMissing) {
    alert("How many pages are in the book?");
  } else {
    fieldsFull = true;
  }

  if (fieldsFull) {
    addBookToLibrary(
      newBookTitle.value,
      newBookAuthor.value,
      newBookPages.value,
      newBookRead.value
    );
    displayBooks();
    clearForm();
    toggleForm();
  }
});

const cancelNewBook = document.getElementById("cancelBook");

cancelNewBook.addEventListener("click", () => {
  clearForm();
  toggleForm();
});

addBookToLibrary(
  "Harry Potter and the Goblet of Fire",
  "JK Rowling",
  "636",
  "true"
);
displayBooks(myLibrary);
