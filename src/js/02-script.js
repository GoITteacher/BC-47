import { NewsApiV2 } from './modules/news-api2';
const refs = {
  formElem: document.querySelector('.js-search-form'),
  listElem: document.querySelector('.js-article-list'),
};

const newsApi = new NewsApiV2();

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  refs.listElem.innerHTML = '';
  newsApi.page = 1;
  const query = e.target.elements.query.value;
  window.addEventListener('scroll', onWindowScroll);

  newsApi.getNews(query).then(data => {
    newsApi.total_pages = data.total_pages;
    renderData(data.articles);
  });

  e.target.reset();
});

let isActive = false;

function onWindowScroll(e) {
  const scrollHeight = e.target.documentElement.scrollHeight;
  const scrollTop = e.target.documentElement.scrollTop;
  const clientHeight = e.target.documentElement.clientHeight;

  const position = scrollHeight - scrollTop - clientHeight;

  if (newsApi.page === newsApi.total_pages) {
    window.removeEventListener('scroll', onWindowScroll);
  }

  if (position < 500 && !isActive) {
    isActive = true;
    newsApi.page += 1;
    newsApi.getNews().then(data => {
      renderData(data.articles);
      isActive = false;
    });
  }
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

  refs.listElem.insertAdjacentHTML('beforeend', markup);
}
