// valid pass
const isValidPassword = (password, username) => {
  // or use indexOf !== -1  instaed of includes
  if (
    password.length < 8 ||
    password.includes(username) ||
    password.includes(" ")
  ) {
    return false;
  }
  return true;
};

const pass = isValidPassword("89Fjj1nms", "dogLuvr");
const notPass = isValidPassword("dogLuvr", "dogLuvr");

// console.log(pass);
// console.log(notPass);

// find avrage

const avg = (arrNum = []) => {
  if (!Array.isArray(arrNum) || !arrNum.length) {
    return "only array is allowed and cannot be empty ";
  }
  return arrNum.reduce((acc, curr) => acc + curr, 0) / arrNum.length;
};

const is25 = avg([0, 50]);

const is852 = avg([75, 76, 80, 95, 100]);
// console.log(is25);
// console.log(is852);

const isPangram = (text) => {
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (text.toLowerCase().indexOf(char) === -1) {
      return false;
    }
  }
  return true;
};
const isTrue = isPangram("The five boxing wizards jump quickly");
const isFalse = isPangram("The five boxing wizards jump quickl");

// console.log(isTrue);
// console.log(isFalse);

const getCard = () => {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  return {
    value: values[getRandomNumber(values.length)],
    suit: suits[getRandomNumber(suits.length)],
  };
};

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};
for (let i = 0; i < 50; i++) {
//   console.log(getCard());
}

// ! fucntions inside opjects

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

const operations = {
  add,
  sub,
};

const adding = operations.add(5,15)
 

//! function return function

function multiplyBy(x){
    return function(y){
        return x * y
    }
}

const triple = multiplyBy(3)
 
console.log(triple(5))

const double = multiplyBy(2)
console.log(double(8));

// return true or false to the age

function makeBetweenFunc(start,end){
    return function(age){
        return age > start && age < end
    }
}

const isChild = makeBetweenFunc(0,18)
const isOld = makeBetweenFunc(60,80)
console.log(isChild(20)); 
console.log(isOld(35));