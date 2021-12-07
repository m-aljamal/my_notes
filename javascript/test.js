// const findAnagrams = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   const str1Obj = {};
//   const str2Obj = {};
//   for (let i = 0; i < str1.length; i++) {
//     str1Obj[str1[i]] = ++str1Obj[str1[i]] || 1;
//     str2Obj[str2[i]] = ++str2Obj[str2[i]] || 1;
//   }

//   for (let key in str1Obj) {
//     if (str1Obj[key] !== str2Obj[key]) return false;
//   }
//   return true;
// };
// console.log(findAnagrams("abcd", "dcba"));
// console.log(findAnagrams("", ""));
// console.log(findAnagrams("aaz", "zza"));
// console.log(findAnagrams("anagram", "nagaram"));
// console.log(findAnagrams("rat", "car"));

function sunZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sunZero([-4, -3, -2, 1, 2, 4]));

// function findUniqu(arr = []) {
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1
// }

// console.log(findUniqu([1, 1, 1, 2]));

function narcissistic(value) {
  const arr = value.toString().split("");
  let total = arr.reduce((prev, curr) => +prev + Math.pow(+curr, +arr.length),0);
  
  return total === value;
}
// 27  343  1
console.log(narcissistic(371));


 