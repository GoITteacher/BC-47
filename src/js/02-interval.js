import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */

/*
 * Очистка интервала с clearInterval(intervalId)
 */


let count = 0;
const id = setInterval(()=>{
    console.log(count++);
}, 100)


setTimeout(()=>{
    console.log('Delete Interval');
    clearInterval(id);
}, 10000);
