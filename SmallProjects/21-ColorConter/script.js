const bodyElement = document.body
const counter = document.getElementById('counter')
const sumBtn = document.getElementById('sum')
const subBtn = document.getElementById('sub')

let number = 0

const getRandomColor = () =>{

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    
}

sumBtn.addEventListener('click',()=>{
    number++
    counter.innerHTML = number

    bodyElement.style.backgroundColor = getRandomColor();
    
})

subBtn.addEventListener('click', ()=>{
    number--
    counter.innerHTML = number

    bodyElement.style.backgroundColor = getRandomColor();

})










