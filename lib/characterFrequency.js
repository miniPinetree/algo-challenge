/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Gotcha ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *
 */

export default function characterFrequency(string) {
  const startTime = new Date().getTime();

// // Map을 이용한 풀이
//   let answer = new Map();
// // 문자열 내 반복 횟수 확인
//   Array.from(string).forEach(char => {
//     if (answer.has(char)) {
//       answer.set(char, answer.get(char) + 1);
//     }else {
//       answer.set(char, 1);
//     };
//   });
// // 빈도수와 알파벳을 기준으로 정렬
// answer = [...answer.entries()].sort(function (a,b) {
//   let frequency1 = a[1];
//   let frequency2 = b[1];
//   let char1 = a[0];
//   let char2 = b[0];

//   if (frequency1 > frequency2) return -1;
//   if (frequency1 < frequency2) return 1;
//   if (char1 < char2) return -1;
//   if (char1 > char2) return 1;
//   return 0;
// });
// -------------------------------------------------

// object 이용한 풀이
  let answer = {};
  Array.from(string).forEach(char => {
    if (answer[char]) {
      answer[char] = answer[char] + 1;
    }else {
      answer[char] = 1;
    };
  });

  answer = Object.entries(answer).sort(function (a,b) {
    let frequency1 = a[1];
    let frequency2 = b[1];
    let char1 = a[0];
    let char2 = b[0];

    if (frequency1 === frequency2) {
      if (char1 < char2) return -1;
      if (char1 > char2) return 1;
    }else if (frequency1 < frequency2) {
      return 1;
    }else {
      return -1;
    }
  });
// -------------------------------------------------
// 왜 시간 측정이 안되는걸까요!
  const endTime = new Date().getTime();
  console.log(endTime - startTime);
   
  return answer;
}
