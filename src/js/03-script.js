import { NewsApiV2 } from './modules/news-api2.js';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  listElem: document.querySelector('.js-article-list'),
  loadNextPageBtn: document.querySelector('.js-btn-next'),
  loadPrevPageBtn: document.querySelector('.js-btn-prev'),
};

const newsApi = new NewsApiV2();

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  refs.listElem.innerHTML = '';
  newsApi.page = 1;
  const query = e.target.elements.query.value;

  newsApi.getNews(query).then(data => {
    newsApi.total_pages = data.total_pages;
    updateBtnStatus();
    renderData(data.articles);
  });
  e.target.reset();
});

refs.loadNextPageBtn.addEventListener('click', e => {
  newsApi.page += 1;

  updateBtnStatus();

  newsApi.getNews().then(data => {
    refs.loadNextPageBtn.disabled = false;
    renderData(data.articles);
  });
});

refs.loadPrevPageBtn.addEventListener('click', e => {
  newsApi.page -= 1;

  updateBtnStatus();

  newsApi.getNews().then(data => {
    refs.loadNextPageBtn.disabled = false;
    renderData(data.articles);
  });
});

function updateBtnStatus() {
  refs.loadNextPageBtn.disabled = newsApi.page === newsApi.total_pages;

  refs.loadPrevPageBtn.disabled = newsApi.page === 1;
}

function renderData(data) {
  const markup = data
    .map(el => {
      return `
      <li class="card news-card">
          <img src="${el.media}" alt="" class="news-image">
          <h3 class="card-title">${el.title}</h3>
          <p class="card-desc">${el.summary}</p>
          <div class="card-footer">
            <span>${el.author}</span>
            <span>Test</span>
            <span>Test</span>
          </div>
        </li>
      `;
    })
    .join('');

  refs.listElem.innerHTML = markup;
}
