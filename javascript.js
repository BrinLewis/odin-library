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
  const read = document.createElement("p");
  const deleteBtn = document.createElement("button");

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  deleteBtn.textContent = "Delete Book";
  deleteBtn.setAttribute("type", "button");
  deleteBtn.classList.add("deleteBtn");

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(deleteBtn);

  if (book.read === "true") {
    read.textContent = "Read";
    read.setAttribute("style", "background-color: green");
  } else {
    read.textContent = "Un-read";
    read.setAttribute("style", "background-color: red");
  }

  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentNode.remove();
  });
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
  textFields.forEach(input => {
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
  if (newBookRead.checked === true) {
    newBookRead.value = true;
  } else {
    newBookRead.value = false;
  }
  addBookToLibrary(
    newBookTitle.value,
    newBookAuthor.value,
    newBookPages.value,
    newBookRead.value
  );
  displayBooks();
  clearForm();
  toggleForm();
});

// Manually added books for testing purposes
addBookToLibrary("Harry Potter", "JK Rowling", 456, "true");
addBookToLibrary("LOTR", "Tolkien", 2265, "true");
addBookToLibrary("The Shining", "Stephen King", 345, "false");
addBookToLibrary("Book 56", "Fred George", 456, "false");
addBookToLibrary("Superman", "Chris robert", 2265, "true");
addBookToLibrary("IT", "Stephen King", 345, "false");
displayBooks(myLibrary);

// Open a form with 4 inputs, name, author, pages, read
// When the submit button is clicked, take these inputs and store them in the array as a new book
