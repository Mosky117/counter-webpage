let count=0;
const plus=document.querySelector('#plus');
const minus=document.querySelector('#minus');
const reset_value=document.querySelector('#reset');

function add(){
    count+=1;
    document.querySelector('.number').innerHTML=count;
}

function subtract(){
    if(document.querySelector('.number').innerHTML==0){
        alert('Start adding some positive values');
    }
    else{
        count-=1;
        document.querySelector('.number').innerHTML=count;
    }
}

function reset(){
    count=0;
    document.querySelector('.number').innerHTML=count;
}

plus.addEventListener('click',add);
minus.addEventListener('click',subtract);
reset_value.addEventListener('click',reset);