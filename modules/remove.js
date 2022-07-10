/* eslint-disable linebreak-style */
export default class Remove {
    remove = (id) => {
      let allBooks = JSON.parse(localStorage.getItem('bookList'));
      allBooks = allBooks.filter((book) => book.id.toString() !== id.toString());
      localStorage.setItem('bookList', JSON.stringify(allBooks));
      // eslint-disable-next-line
      location.reload();
    }
}