const paragraph = document.getElementById("firstB");
paragraph.style.color = "red";

const lis = document.getElementsByTagName("li");
for (let li of lis) {
  li.style.color = "green";
}

const arra = [...lis];
console.log(arra);

const formValues = document.getElementsByTagName('input')
for(let input of formValues){
    console.log(input.value);
}

const sP = document.getElementsByClassName('secoundP')
for(let p of sP){
p.style.color = 'blue';
}