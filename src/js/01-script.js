import { NewsApi } from './modules/news-api';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  listElem: document.querySelector('.js-article-list'),
  loadMoreBtn: document.querySelector('.js-btn-load'),
};

const newsApi = new NewsApi(20);

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  refs.listElem.innerHTML = '';
  newsApi.page = 1;
  const query = e.target.elements.query.value;
  newsApi.getNews(query).then(data => {
    refs.loadMoreBtn.disabled = false;
    renderData(data.articles);
  });
  e.target.reset();
});

refs.loadMoreBtn.addEventListener('click', () => {
  newsApi.page += 1;
  newsApi.getNews().then(data => {
    refs.loadMoreBtn.disabled = false;
    renderData(data.articles);

    const page = newsApi.page;
    const maxPage = Math.ceil(data.totalResults / newsApi.pageSize);
    if (page === maxPage || data.articles.length === 0) {
      refs.loadMoreBtn.disabled = true;
    }
  });
});

function renderData(data) {
  const markup = data
    .map(el => {
      return `
    <li class="card news-card">
        <img src="${el.urlToImage}" alt="" class="news-image">
        <h3 class="card-title">${el.title}</h3>
        <p class="card-desc">${el.description}</p>
        <div class="card-footer">
          <span>${el.author}</span>
          <span>Test</span>
          <span>Test</span>
        </div>
      </li>
    `;
    })
    .join('');

  refs.listElem.insertAdjacentHTML('beforeend', markup);
}
