import '../css/common.css';
import { BooksAPI } from './modules/booksAPI';

const booksAPI = new BooksAPI();

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  bookList: document.querySelector('.js-book-list'),
  deleteForm: document.querySelector('.js-delete-form'),
};

// =====================================================
booksAPI.getBooks().then(books => {
  renderBooks(books);
});

function renderBooks(books) {
  const markup = books
    .map(book => {
      return `
    <li data-id="${book.id}" class="card articles list-item">
    - ${book.title}<br>
    - ${book.author}<br>
    </li>
    `;
    })
    .join('');

  refs.bookList.innerHTML = markup;
}

refs.createForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const book = {};

  for (let [key, value] of formData.entries()) {
    value = value.trim();
    key = key.replace('book', '').toLowerCase();

    book[key] = value;
  }

  // const title = e.target.elements.bookTitle.value;
  // const author = e.target.elements.bookAuthor.value;
  // const desc = e.target.elements.bookDesc.value;
  // const book = { title, author, desc };

  booksAPI.createBook(book).then(newBook => {
    const markup = `
    <li data-id="${newBook.id}" class="card articles list-item">
    - ${newBook.title}<br>
    - ${newBook.author}<br>
    </li>
    `;

    refs.bookList.insertAdjacentHTML('beforeend', markup);
  });

  e.target.reset();
});

// ====================

refs.resetForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const book = {};

  for (let [key, value] of formData.entries()) {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  }

  booksAPI.resetBook(book).then(updatedBook => {
    const oldBook = refs.bookList.querySelector(`[data-id="${book.id}"]`);

    const markup = `
    <li data-id="${book.id}" class="card articles list-item">
    - ${book.title}<br>
    - ${book.author}<br>
    </li>
    `;

    oldBook.insertAdjacentHTML('afterend', markup);
    oldBook.remove();
  });

  e.target.reset();
});

// =========================
refs.updateForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const book = {};
  for (let [key, value] of formData.entries()) {
    // if (value === '') continue;

    if (value.trim() !== '') {
      key = key.replace('book', '').toLowerCase();
      book[key] = value;
    }
  }

  booksAPI.updateBook(book).then(updatedBook => {
    const oldBook = refs.bookList.querySelector(`[data-id="${book.id}"]`);
    const markup = `
    <li data-id="${updatedBook.id}" class="card articles list-item">
    - ${updatedBook.title}<br>
    - ${updatedBook.author}<br>
    </li>
    `;
    oldBook.insertAdjacentHTML('afterend', markup);
    oldBook.remove();
  });

  e.target.reset();
});

// =================

refs.deleteForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  booksAPI.deleteBook(id);
  const oldBook = refs.bookList.querySelector(`[data-id="${id}"]`);
  oldBook.remove();
  e.target.reset();
});
