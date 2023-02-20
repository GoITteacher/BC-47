import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
  subscribeBtn: document.querySelector('button[data-subscribe]'),
  hideBtn: document.querySelector('.js-hide-modal'),
};
const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
const modal = new BSN.Modal('#subscription-modal');

function openModal(){
  if(promptCounter < MAX_PROMPT_ATTEMPTS){
    promptCounter += 1;
    setTimeout(()=>{
      modal.show();
    }, PROMPT_DELAY)
  }
}

openModal();

refs.hideBtn.addEventListener('click', ()=>{
  modal.hide();
  openModal();
})

refs.subscribeBtn.addEventListener('click', ()=>{
  modal.hide();
})