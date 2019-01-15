function swap(arr, i, j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function countSwaps(a) {
  let count = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = i+1; j < a.length; j++) {
      if(a[i]>a[j]) {
        a = swap(a,i,j);
        count++;
      }
    }
  }
  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length-1]}`);
  return count;
}

const a = [3,2,1];
const result = countSwaps(a); //n2 complexity
console.log(result);