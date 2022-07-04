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
        const list = document.querySelector('book-list');

        const row = document.createElement('div');

        row.innerHTML = `
          <h6>${book.btitle}</h6>
          <p>${book.aname}</p>
          <button type="#">Remove</button>
        `;
        list.appendChild(row);
    }
}

// Display books
document.addEventListener('DOMContentLoaded', Storage.displayBooks);

// add.addEventListener('click', (e) => {
//     e.preventDefault();
//     const btitle = title.value;
//     btitle
//     const aname = author.value;

//     if(!(bname.length <3 || aname.length <3)){
//          id +=1;
//         const newBook = new Book ();
//         newBook.id = id;
//         newBook.btitle = btitle;
//         newBook.aname = aname;
//     }

//     console.log (Book);
// } )