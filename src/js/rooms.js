import '../css/common.css';


// async function test(){
//     const p1 = fetch('http://localhost:3000/books/1')
//     const p2 = fetch('http://localhost:3000/books/2')
//     const p3 = fetch('http://localhost:3000/books/3')

//     const responses = await Promise.all([p1,p2,p3])
//     const promises = responses.map(response=>response.json())
    
//     const result = await Promise.all(promises);
//     console.log(result);
// }


// test();

const listElem = document.querySelector('.js-card-container');
let height = 100;
const observer = new IntersectionObserver((entries, observer)=>{
    height+=1000;
    listElem.style.height = `${height}px`;
})
const block = document.querySelector('.js-observer');
observer.observe(block);