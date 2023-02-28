const BASE_URL = 'http://localhost:3000';

export class BooksAPI {
  getBooks() {
    return fetch(`${BASE_URL}/books`).then(response => response.json());
  }

  createBook(book) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books`, options).then(response =>
      response.json(),
    );
  }

  resetBook(book) {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books/${book.id}`, options).then(response =>
      response.json(),
    );
  }

  updateBook(book) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(`${BASE_URL}/books/${book.id}`, options).then(response =>
      response.json(),
    );
  }

  deleteBook(id) {
    fetch(`${BASE_URL}/books/${id}`, {
      method: 'DELETE',
    });
  }
}
