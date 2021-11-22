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

const adding = operations.add(5, 15);

//! function return function

function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}

const triple = multiplyBy(3);

// console.log(triple(5))

const double = multiplyBy(2);
// console.log(double(8));

// return true or false to the age

function makeBetweenFunc(start, end) {
  return function (age) {
    return age > start && age < end;
  };
}

const isChild = makeBetweenFunc(0, 18);
const isOld = makeBetweenFunc(60, 80);
// console.log(isChild(20));
// console.log(isOld(35));

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

function printTriple(n) {
  // console.log(n * 3);
}

const n = numbers.forEach(printTriple);
// console.log(n);

const books = [
  {
    title: "t1",
  },
  {
    title: "t2",
  },
  {
    title: "t3",
  },
  {
    title: "t4",
  },
  {
    title: "t5",
  },
];

const titles = books.forEach((book, index) => {
  // console.log(book.title);
  // console.log(index);
});

// console.log(titles);

const doubles = numbers.map((numer) => {
  return numer * 2;
});

// console.log(doubles);

const words = ["asap", "byob", "rsvp", "diy"];

const wordsWithDots = words.map((word) => {
  return word.toUpperCase().split("").join(".");
});
// console.log(wordsWithDots);

let new_nums = [1, 2, 3, 4, 5, 6, 7, 8];

const parityList = new_nums.map((n) => (n % 2 === 0 ? "Even" : "Odd"));
console.log(parityList);

let movies = ["Nano Mr", "Mr. Fox", "Zipra"];

const findMs = movies.find((movie) => movie.includes("Mr"));
// console.log(findMs);

const startWithMr = movies.find((movie) => movie.indexOf("Mr") === 0);

// console.log(startWithMr);

const filterEven = new_nums.filter((n) => n % 2 === 0);
// console.log(filterEven);

const textWords = ["dxgx", "drg", "drg"];

const allWithD = textWords.some((l) => l[l.length - 1] === "x");

// console.log(allWithD);

// sort

const prices = [400.5, 3000, 99.99, 35, 12.0, 9500];

const sortPrices = prices.sort((a, b) => a - b);

// console.log(sortPrices);

const desSort = prices.sort((a, b) => b - a);
// console.log(desSort);

const rating = [
  {
    rat: 3.67,
  },
  {
    rat: 4,
  },
  {
    rat: 2.99,
  },
  {
    rat: 3.8,
  },
  {
    rat: 3.7,
  },
  {
    rat: 2,
  },
];
// console.log(rating);
const sortRating = rating.sort((a, b) => a.rat - b.rat);

// console.log(sortRating);

// reduce
const findMax = rating.reduce((max, curr) => {
  if (curr.rat > max.rat) return curr;
  return max;
});
const findMin = rating.reduce((acc, curr) => {
  if (curr.rat < acc.rat) return curr;
  return acc;
});
// console.log(findMin);
// console.log(findMax);

const nums = [98, 50, 55, 63, 7, 5, 100];
const findMax2 = nums.reduce((max, curr) => Math.max(max, curr));
// console.log(findMax2);

// with initial value

const withinitial = nums.reduce((acc, curr) => acc + curr, 100);

// console.log(withinitial);

// reudce with object

const votes = ["y", "y", "n", "n", "y"];

const tally = votes.reduce((tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;
  return tally;
}, {});

const booksArr = [
  {
    title: "book1",
    author: "auth1",
    rating: 4.65,
  },
  {
    title: "book2",
    author: "auth2",
    rating: 5.0,
  },
  {
    title: "book4",
    author: "auth4",
    rating: 5.0,
  },
  {
    title: "book3",
    author: "auth3",
    rating: 2,
  },
];

const booksObjRating = booksArr.reduce((rates, book) => {
  const key = Math.floor(book.rating);
  if (!rates[key]) rates[key] = [];
  rates[key].push(book);
  return rates
}, {});

// console.log(booksObjRating);


const spread = (...rest) =>{
  console.log({x});
  console.log({rest});
}
// spread("test");

const testString = (a, b, c) =>  {
  console.log(a, b, c);

}
const string = 'thi'

// testString(...string);

const sum = (...rest) => {
  console.log(rest);
  return rest.reduce((acc, curr) => acc + curr);
}
// console.log( sum(1,2,3,4,5,6,7,8,9,10,11,12));

const raceResults = ["first", 'secount', 'third']

const [gold,...other] = raceResults;
// console.log({gold, other});

const persons={
  name: 'John',
  age: 30,

}

const {age:manAge} = persons;
// console.log(manAge);

 