const BASE_URL = 'http://localhost:3000'; 

export class BooksAPI {

  async getBooks() {
    const response = await fetch(`${BASE_URL}/books`);
    const data = await response.json();

    return data;
  }

  async createBook(book) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    const response = await fetch(`${BASE_URL}/books`, options);
    const data = await response.json();
    return data;
  }

  async resetBook(book) {
    console.log(123);
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };


    const response = await fetch(`${BASE_URL}/books/${book.id}`, options)
    return response.json()
  }

  async updateBook(book) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    const response = await fetch(`${BASE_URL}/books/${book.id}`, options)
    return response.json()
    
  }

  deleteBook(id) {
    fetch(`${BASE_URL}/books/${id}`, {
      method: 'DELETE',
    });
  }
}
