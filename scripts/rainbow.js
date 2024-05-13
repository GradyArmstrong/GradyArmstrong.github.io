let arrcolor = ["red","orange","yellow","green","blue","purple","pink"]

let ul = document.createElement('ul');

for (let i = 0; i < arrcolor.length; i++){
    let li = document.createElement('li');
    li.innerText = arrcolor[i];
    li.style.color = arrcolor[i];
    ul.appendChild(li);
}

document.body.appendChild(ul);