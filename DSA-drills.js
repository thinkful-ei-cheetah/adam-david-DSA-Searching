// given 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 sort with binary search algorithm. 
// find 8

// look for the midle of the array 
// returns 12 
// 8<12 so will look through lower half.

// 3,5,6,8,11 find middle point again
// returns 6
// 8>6 so will look in upper half

// 8,11 find midpoint.
// no mid point so returns higher???
// returns 11
// 8<11
// so will look lowe half
// finds 8 
// 8 === value
// returns 8; final output. 


//3.
function deweySearching(dewey, title, start, end) {
  start = start === undefined ? 0 : start;
  end = end === undefined ? dewey.length : end;

  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = dewey[index];

  for (let i = 0; i < dewey.length; i++) {   
    if (dewey[i] == title) {
      return 'found book'
    } 
  }
  if (item < dewey) {
    return deweySearching(dewey, title, index + 1, end);
  }
  else if (item > dewey) {
    return deweySearching(dewey, title, start, index - 1);
  }
}
console.log(deweySearching(['be', 'he', 'hi'], 'hi'))

//4.
// in order 14 15 19 25 27 35 79 89 90 91
// pre 35 25 15 14 19 27 89 79 91 90
// post 14 19 15 27 25 79 90 91 89 35


//            35
//        /      \
//       25       89
//     /    \     / \   
//    15    27   79  91 
//   /  \            /
// 14    19         90


//post 5 7 6 9 11 10 8
//pre 8 6 5 7 10 9 11             

      //       8
      //   6      10
      // 5   7   9  11

      