const myStudents = [
  {
    grade: 86,
  },
  {
    grade: 97,
  },
  {
    grade: 72,
  },
  {
    grade: 90,
  },
];

let avg =
  myStudents.reduce((acc, curr) => acc + curr.grade, 0) / myStudents.length;

for (let i in myStudents) {
  //  console.log(myStudents[i].grade);
}

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

const count = gameBoard.reduce((acc, curr) => {
  curr.forEach((n) => {
    acc += n;
  });
  return acc;
}, 0);

// console.log(count);

const myMovies = {
  arrival: 8.5,
  alien: 5,
  amelie: 8,
};

for(key in myMovies){
    console.log(` ${key} ${myMovies[key]}`);
}
const k = Object.keys(myMovies)
const v = Object.values(myMovies)
console.log(k);
console.log(v);

const movie_avg = Object.values(myMovies).reduce((acc, curr)=> acc + curr,0) / Object.values(myMovies).length
console.log(movie_avg);


const arrs =  [1,2,3]
for(let v of arrs){
    console.log(v);
}