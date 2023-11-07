
const slider = document.querySelector('.slider');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active += 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    };
    reloadSlider();
};

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
};