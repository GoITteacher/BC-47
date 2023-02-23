const BASE_URL = 'https://newsapi.org/v2';

export class NewsApi {
  query;
  page = 1;
  pageSize;
  totalResults;

  constructor(pageSize) {
    this.pageSize = pageSize;
  }

  getNews(query) {
    if (query) {
      this.query = query;
    }
    const END_POINT = '/everything';
    const PARAMS = new URLSearchParams({
      q: this.query,
      apiKey: 'c8747511a2c34730a83caaff4f3693e7',
      page: this.page,
      pageSize: this.pageSize,
    });

    return fetch(`${BASE_URL}${END_POINT}?${PARAMS}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error(res.status);
      })
      .catch(err => {
        console.log(err);
        return { articles: [] };
      });
  }
}
