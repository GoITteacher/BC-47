const BASE_URL = 'https://free-news.p.rapidapi.com/v1';

export class NewsApiV2 {
  page = 1;
  query = '';
  total_pages = 1;

  getNews(query) {
    if (query) {
      this.query = query;
    }

    const options = {
      headers: {
        'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      },
    };

    const PARAMS = new URLSearchParams({
      q: this.query,
      page: this.page,
      page_size: 20,
    });
    return fetch(`${BASE_URL}/search?${PARAMS}`, options).then(res => {
      return res.json();
    });
  }
}
