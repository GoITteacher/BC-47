import '../css/common.css';
import { refs } from './modules/refs.js';
import { getHero } from './modules/heroes-api.js';
import { getPosts } from './modules/post-api';
import { generateUser } from './modules/user-api';

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const hero = e.target.elements.query.value;
  getHero(hero).then(data => {
    if (data) renderHero(data);
    else console.log();
  });
});

function renderHero({ images, name, biography, abilities }) {
  const markup = `
    <div class="card">
    <div class="card-img-top">
      <img src="${images.sm}" alt="${name}" style="width:160px;height:240px">
    </div>
    <div class="card-body">
      <h2 class="card-title">Имя: ${biography.fullName}</h2>
  
      <p class="card-text"><b>Умения</b></p>
      <ul class="list-group">
      ${biography.aliases
        .map(el => `<li class="list-group-item">${el}</li>`)
        .join('')}
      </ul>
    </div>
  </div>`;

  refs.cardContainer.innerHTML = markup;
}

// =======================================================

refs.form1.addEventListener('submit', e => {
  e.preventDefault();
  generateUser();
  //   getPosts().then(data => {
  //     renderPosts(data);
  //   });
});

function renderPosts(posts) {
  const markup = posts
    .map(post => {
      return `
            <li class='post'>
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            </li>
        `;
    })
    .join('');

  refs.cardContainer1.innerHTML = markup;
}
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
