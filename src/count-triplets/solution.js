function countTriplets(arr, r) {
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    let el = arr[i];
    let before = arr.slice(0,i);
    let beforeOkLen = before.filter(x => x === el/r).length;
    let after = arr.slice(i+1,arr.length);
    let afterOkLen = after.filter(x => x === el*r).length;
    count += beforeOkLen*afterOkLen;
  }
  return count;
}

const arr = [1, 3, 9, 9, 27, 81];
const r = 3;
const result = countTriplets(arr, r); // linear complexity
console.log(result);
