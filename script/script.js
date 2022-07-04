
let books = [];

//book object
function addBook(id, title, author) {
  const Book = new Object()
  Book.id = id;
  Book.title = title;
  Book.author = author;
  addToList(Book)
 
}

//add book to array and local storage
function addToList(book) {
  books.push(book)
  localStorage.setItem('books', JSON.stringify(books));
  let storage = JSON.parse(localStorage.getItem("books"));

  const list = document.querySelector('#book-list');
  const row = document.createElement('div');

  storage.forEach(book => {
    

    row.innerHTML = `
    <h6>${book.title}</h6>
    <p>${book.author}</p>
    <button type="#">Remove</button>
  `;
    list.appendChild(row);
    
   });
}


const form = document.getElementById('formId')

form.addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  const bookTitle = document.querySelector('#btitle').value;
  const bookAuthor = document.querySelector('#aname').value;
  let id = Date.now() + Math.random();


  addBook(id, bookTitle, bookAuthor)

});