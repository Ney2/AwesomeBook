const list1 = document.querySelector('.list1');
const list2 = document.querySelector('.list2');
const list3 = document.querySelector('.list3');

const addBook = document.getElementById('form');
const List = document.getElementById('list');
const contact = document.getElementById('contact');

export const listOfBooks = list1.addEventListener('click', () => {
  list3.style.color = '#000';
  list2.style.color = '#000';
  list1.style.color = 'rgba(43, 64, 250,1)';

  List.classList.remove('hide-nav');
  addBook.classList.add('hide-nav');
  contact.classList.add('hide-nav');
});

export const addNewBook = list2.addEventListener('click', () => {
  list3.style.color = '#000';
  list2.style.color = 'rgba(43, 64, 250,1)';
  list1.style.color = '#000';

  addBook.classList.remove('hide-nav');
  contact.classList.add('hide-nav');
  List.classList.add('hide-nav');
});

export const contactInfo = list3.addEventListener('click', () => {
  list3.style.color = 'rgba(43, 64, 250,1)';
  list2.style.color = '#000';
  list1.style.color = '#000';

  contact.classList.remove('hide-nav');
  List.classList.add('hide-nav');
  addBook.classList.add('hide-nav');
});
