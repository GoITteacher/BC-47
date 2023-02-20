/**
 * - Показываем и скрываем добавляя/удаляя класс js-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

/*
 * Функции
 */


function showNotification(){
  refs.notification.classList.add('js-visible');
}

function hideNotification(){
  refs.notification.classList.remove('js-visible');
}

setTimeout(()=>{
  showNotification();
  timeoutId = setTimeout(hideNotification, 1000);
}, NOTIFICATION_DELAY);


refs.notification.addEventListener('click', ()=>{
  hideNotification();
  clearTimeout(null);
});