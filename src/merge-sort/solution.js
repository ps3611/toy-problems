function merge(arr1,arr2) {
  const arr = [];
  let toPush;
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length===0) toPush = arr2.splice(0,1)[0];
    else if (arr2.length===0) toPush = arr1.splice(0,1)[0];
    else toPush = arr1[0] < arr2[0] ? arr1.splice(0,1)[0] : arr2.splice(0,1)[0];
    arr.push(toPush);
  }
  return arr;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  const arr1 = mergeSort(arr.slice(0,Math.floor(arr.length/2)));
  const arr2 = mergeSort(arr.slice(Math.floor(arr.length/2),arr.length));
  return merge(arr1,arr2);
}

const arr = [9,2,1,4,6,7,3,2,4,5,34,31,6,780,67,34,1];
const result = mergeSort(arr); // n log n complexity
console.log(result);

