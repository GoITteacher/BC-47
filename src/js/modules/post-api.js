const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getPosts() {
  return fetch(`${BASE_URL}/posts`)
    .then(res => res.json())
    .catch(err => {});
}
