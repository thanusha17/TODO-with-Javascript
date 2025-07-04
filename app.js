let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let done = document.querySelectorAll(".fa-square-check");
let del = document.querySelectorAll(".fa-trash");
let add = document.querySelector(".fa-circle-plus");

add.addEventListener("click",function(){
    let task = inp.value;
    inp.value="";
    let item = document.createElement("li");
    ul.appendChild(item);
    let div = document.createElement("div");
    div.classList.add("todo");
    div.innerText=`${task}`;
    item.appendChild(div);
    let icon1 = document.createElement("i");
    let icon2 = document.createElement("i");
    icon1.classList.add("fa-solid");
    icon1.classList.add("fa-square-check");
    icon2.classList.add("fa-solid");
    icon2.classList.add("fa-trash");
    div.appendChild(icon1);
    div.appendChild(icon2);
  
});

function deleteTask(e){
        let par = e.target.parentElement;
        let parpar = par.parentElement;
        if(par.nodeName=="DIV"){
            parpar.remove();
        }
 }

ul.addEventListener("click",deleteTask);
