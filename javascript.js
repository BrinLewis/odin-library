let myLibrary = [];

myLibrary[0] = testBook;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  for (const book of myLibrary) {
    const card = document.createElement("div");
    card.classList.add("bookCard");
    const container = document.querySelector(".books");
    container.appendChild(card);

    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

  }
}

displayBooks(myLibrary);

// Open a form with 4 inputs, name, author, pages, read
// When the submit button is clicked, take these inputs and store them in the array as a new book
