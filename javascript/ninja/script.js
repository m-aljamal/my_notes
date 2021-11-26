
function text(nin, t='kk'){
    return nin + " " + t
}

const v1 = text('ninja')
const v2 = text('ninja', 'jjj')

console.log(v1);
console.log(v2);

const button = document.querySelector('button')
button.addEventListener