const s = "We test coders. Give is a try?";
const s2 = "Forget  CV..Save time . x x";
// ["Forget  CV.", "Save time .", " " ,"x x"]

// const t = s2.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
const t = s.replace(/[.?!*]/g, "|").split("|");

 
const findMaxWord = (s) => {
    
  const sentence = s.replace(/[.?!*]/g, "|").split("|");
 
    
//   const arrayOfLenght = sentence.map((x) => x.split(" ").length);
  const arrayOfLenght = sentence.map((x) => x.split(" "));
  console.log(arrayOfLenght);
  return Math.max(...arrayOfLenght);
};
 
 let stoa = s2.match(/.*?[?!.]/g)
 console.log(stoa[0]);
 const n = stoa.map((x) => x.split(" ").length);
//  console.log(n);