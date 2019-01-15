function swap(arr, i, j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function minimumSwaps(arr) {
  let swaps = 0;
  for (let el = 1; el <= arr.length; el++) {
    let curr_i = arr.indexOf(el);
    if (el !== curr_i+1) {
      arr = swap(arr,curr_i,el-1);
      swaps++;
    }
  }
  return swaps;
}

const arr = [7, 1, 3, 2, 4, 5, 6];
const result = minimumSwaps(arr); // linear complexity
console.log(result);
