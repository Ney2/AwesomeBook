// const bookStore = document.querySelector('book-list');
// const author = document.getElementById('author-name');
// const title = document.getElementById('title-name');
// const add = document.getElementById('add');

// let allbooks = {};
// let id;

class Book {
    constructor (id, btitle, aname){
        this.id = id;
        this.btitle = btitle;
        this.aname = aname;
    }  
}

// Local Storage
class Storage {
    static displayBooks() {
        const storedBooks = [
            {
                id: 1,
                btitle: 'book1',
                aname:'name1'
            },

            {
                id:2,
                btitle:'book2',
                aname:'name2'
            }
        ];

        const books = storedBooks;
        books.forEach((book) => Storage.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('div');

        row.innerHTML = `
          <h6>${book.btitle}</h6>
          <p>${book.aname}</p>
          <button type="#">Remove</button>
        `;
        list.appendChild(row);
    }
}

// Store Class: Handles Storage
class Store {
    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
  }

// Display books
document.addEventListener('DOMContentLoaded', Storage.displayBooks);


const form = document.getElementById('formId')

// Event: Add a Book
form.addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    const title = document.querySelector('#btitle').value;
    const author = document.querySelector('#aname').value;
    id = Date.now() + Math.random();
  
 
      // Instatiate book
      const book = new Book(id, title, author);
  
      // Add Book to UI
      Storage.addBookToList(book);
  
      // Add book to store
      Store.addBook(book);

    
  });