const counterValue = document.querySelector(".value");
let value = counterValue.innerText;
value = parseInt(value);

function inc(){
    value = value+1;
    counterValue.innerText = value;
}
function dec(){
    value = value-1;
    counterValue.innerText = value;
}
function save(){
    let en = document.querySelector(".entries");
    en.textContent;
    en.textContent = en.textContent+ value + "-";
}

