/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import Remove from '/modules/remove.js';
import Add from '/modules/add.js';
import * as navList from '/modules/navigation.js';
import * as Time from '/modules/time.js';

Time.getTime();

navList.listOfBooks;
navList.addNewBook;
navList.contactInfo;

const add = new Add();
const remove = new Remove();
const createNew = document.getElementById('add');
const bookContainer = document.getElementById('bookList');

let allBooks = [];

if (localStorage.getItem('bookList') === null) {
  localStorage.setItem('bookList', []);
}

if (localStorage.getItem('id') === null) {
  localStorage.setItem('id', JSON.stringify(0));
}

const refreshDOM = () => {
  allBooks = JSON.parse(localStorage.getItem('bookList'));
  allBooks.forEach((book) => {
    const bookTitle = book.name;
    const bookAuthor = book.author;
    const bookId = book.id;
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.className = 'remove';
    removeBtn.addEventListener('click', (e) => {
      const { id } = e.target.parentNode;
      remove.remove(id);
    });
    const newBook = document.createElement('div');
    const newTitle = document.createElement('p');
    const newAuthor = document.createElement('p');
    newTitle.innerText = bookTitle;
    newAuthor.innerText = bookAuthor;
    newBook.id = bookId;
    newBook.append(newTitle, newAuthor, removeBtn);
    bookContainer.appendChild(newBook);
  });
};
window.onload = refreshDOM;
createNew.addEventListener('click', (e) => {
  e.preventDefault();
  add.add();
  bookContainer.innerHTML = '';
  refreshDOM();
});