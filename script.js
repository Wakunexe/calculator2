const display = document.getElementById('display');

const numbers = document.querySelectorAll('button.number');
const operators = document.querySelectorAll('button.operator');
const clear = document.getElementById('clear')
const equal = document.getElementById('equal');
const ops = [(a,b) => a + b, (a,b)=> a- b, (a,b) => a*b, (a,b)=> a/b,(a,b)=>a];

let state = 0;//0:一つ目の入力中、1:演算子入力済みで、2つ目の値の入力まち、2:2つ目の入力中

let first = 0;
let second = 0;
let op = 4;//初期化

clear.onclick = () =>{
    first = 0;
    second = 0;
    op = 4;
    state = 0;
    display.textContent = first;
};

equal.onclick = () =>{
    if(state === 2){
        first = ops[op](first,second);
        display.textContent = first;
        state = 1;
    }
};

for(const number of numbers){//入力
    number.onclick = () =>{
        if(state === 0){
            first = 10*first + Number(number.textContent);
            display.textContent = first;
        }
        else if(state === 1){
            second = Number(number.textContent);
            display.textContent = second;
            state = 2;
        }
        else{
            second = 10*second + Number(number.textContent);
            display.textContent = second;
        }
    }
}

for(let i = 0;i<4 ; i++){
    operators[i].onclick = () => {
        if(state === 0){
            op = i;
            state = 1;
        }
        else if(state === 1){
            op = i;
        }
        else{
            first = ops[op](first,second);
            op = i;
            display.textContent = first;
            state = 1;
        }
    };
}
//演算子のもろもろ





