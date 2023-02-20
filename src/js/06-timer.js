import '../css/common.css';
import { Timer } from './timer';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};



const timer = new Timer(tick)

function tick(time){
  refs.clockface.textContent = time;
}

refs.startBtn.addEventListener('click', ()=>{
  timer.start();
})

refs.stopBtn.addEventListener('click', ()=>{
  timer.stop();
})

