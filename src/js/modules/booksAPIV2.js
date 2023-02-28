import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.headers = {
//     'X-RapidAPI-Key': 'Test',
//     'X-RapidAPI-Host': 'Test2'
// }

const axios1 = axios.create({
    baseURL: 'http://localhost:3000',
    params: {id:1},
    headers:{test:'headers1'}
})

const axios2 = axios.create({
    baseURL: 'http://localhost:3000',
    params: {id:2},
    headers:{test:'headers2'}
})



export class BooksAPI {


  async getBooks() {
    const response = await axios2.get('/books')
    return response.data;
  }

  async createBook(book) {
    try{
        return await axios.request({
            baseURL:'http://localhost:3000',
            url: '/books',
            method: 'POST',
            data: book,
            validateStatus: (status)=>{
                return status == 200;
            }
        })
    }catch (err){
        console.log(err);
    }
    
  }

  async createBook2(book) {
    const response = await axios2.post('/books', book);
    return response.data;
  }

  async resetBook(book) {
    const response = await axios2.put(`/books/${book.id}`, book);
    return response.data;
  }

  async updateBook(book) {
    const response = await axios2.patch(`/books/${book.id}`, book);
    return response.data;
  }

  deleteBook(id) {
    axios.delete(`/books/${id}`);
  }
}
