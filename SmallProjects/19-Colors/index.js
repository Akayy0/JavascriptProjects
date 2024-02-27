const cor1 = document.getElementById("cor1");
const cor2 = document.getElementById("cor2");
const cor3 = document.getElementById("cor3");
const cor4 = document.getElementById("cor4");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

btn1.addEventListener("click", () =>{

    cor1.style.backgroundColor = "yellow";
});

btn2.addEventListener("click", () =>{

    cor2.style.backgroundColor = "red";
});

btn3.addEventListener("click", () =>{

    cor3.style.backgroundColor = "green";
});

btn4.addEventListener("click", () =>{

    cor4.style.backgroundColor = "blue";
});