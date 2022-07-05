const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookList = document.getElementById('bookList');
const button = document.getElementById('add');
let allBooks = [];
let id;

class Book {
    id = this.id;

    name = this.name;

    author = this.author;
}

 if (localStorage.getItem('bookList') === null) {
   localStorage.setItem('bookList', []);
}

 if (localStorage.getItem('id') === null) {
   localStorage.setItem('id', JSON.stringify(0));
  id = JSON.parse(localStorage.getItem('id'));
 }

const refreshDOM = () => {
   allBooks = JSON.parse(localStorage.getItem('bookList'));
 allBooks.forEach((book) => {
    const bookTitle = book.name;
    const bookAuthor = book.author;
    const bookId = book.id;
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
     removeBtn.addEventListener('click', (e) => {
     const { id } = e.target.parentNode;
      allBooks = allBooks.filter((book) => book.id.toString() !== id.toString());
      localStorage.setItem('bookList', JSON.stringify(allBooks));      // eslint-disable-next-line
      location.reload();
    });
     const newBook = document.createElement('div');
     const newTitle = document.createElement('p');
     const newAuthor = document.createElement('p');
     const line = document.createElement('hr');
     newTitle.innerText = bookTitle;
     newAuthor.innerText = bookAuthor;
     newBook.id = bookId;
     newBook.appendChild(newTitle);
     newBook.appendChild(newAuthor);
     newBook.appendChild(removeBtn);
     newBook.appendChild(line);
     bookList.appendChild(newBook);
   });
 };

window.onload = refreshDOM;
button.addEventListener('click', (e) => {
  e.preventDefault();
  const name = bookTitle.value;
  bookTitle.value = '';
  const author = bookAuthor.value;
  bookAuthor.value = '';
  if (!(name.length < 3 || author.length < 3)) {
    id = JSON.parse(localStorage.getItem('id'));
    id += 1;
    localStorage.setItem('id', JSON.stringify(id));
    const newBook = new Book();
    newBook.id = id;
    newBook.name = name;
    newBook.author = author;
    if (localStorage.getItem('bookList').length !== 0) {
      allBooks = JSON.parse(localStorage.getItem('bookList'));
    } else {
      allBooks = [];
    }

    allBooks.unshift(newBook);
    localStorage.setItem('bookList', JSON.stringify(allBooks));
    bookList.innerHTML = '';
    refreshDOM();
  }
});