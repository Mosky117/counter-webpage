let count=0;
const body=document.querySelector('.box')

const number=document.createElement("p");
number.innerText = "0";
body.appendChild(number);
number.className='number';

const inside_box=document.createElement('div');
body.appendChild(inside_box);
inside_box.className='inside-box';

const minus=document.createElement('button');
minus.innerText='-';
inside_box.appendChild(minus);
minus.className='button';
minus.id='reset';

const reset=document.createElement('button');
reset.innerText='Reset';
inside_box.appendChild(reset);
reset.className='button';
reset.id='reset';

const plus=document.createElement('button');
plus.innerText='+';
inside_box.appendChild(plus);
plus.className='button';
plus.id='plus';

function add(){
    count+=1;
    number.innerHTML=count;
}

function subtract(){
    if(number.innerHTML==0){
        alert('Start adding some positive values');
    }
    else{
        count-=1;
        number.innerHTML=count;
    }
}

function restart(){
    count=0;
    number.innerHTML=count;
}

plus.addEventListener('click',add);
minus.addEventListener('click',subtract);
reset.addEventListener('click',restart);