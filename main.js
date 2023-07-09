const btn = document.querySelector('.btn1');
const inputEle = document.querySelector('input');
const selectEle = document.querySelector('#fact');
const result = document.querySelector('.result');
const random = document.querySelector('.btn');

btn.addEventListener('click',(e)=> {
    e.preventDefault();
    ele = inputEle.value;
    type = selectEle.value;
    generate(ele,type);
});

random.addEventListener('click',() => {
    generate(-1,-1);
})

let url;

async function generate(ele,type) {
    if(ele === -1 && type === -1){
        url = `http://numbersapi.com/random`;
    }
    else{
        url = `http://numbersapi.com/${ele}/${type}`;
    }
    const x = await fetch(url);
    const data = await x.text();
    result.innerHTML = data;
    result.style.display = 'block';
}