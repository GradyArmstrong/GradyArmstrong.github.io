let arrcolor = ["red","orange","yellow","green","blue","purple","pink"]

let ul = document.createElement('ul');

for (let i = 0; i < arrcolor.length; i++){
    let li = document.createElement('li');
    itemcolor.innerText = arrcolor[i];
    itemcolor.style.color = arrcolor[i];
    colorlist.appendChild(li);
}

document.body.appendChild(ul);