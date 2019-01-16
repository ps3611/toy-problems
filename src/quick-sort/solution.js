function swap(arr, i, j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  if (Math.max(...arr)===Math.min(...arr)) return arr;
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  let left = 0;
  let right = arr.length-1;
  while (left+1 <= right) {
    if(!(pivot <= arr[left])) left++;
    if(!(arr[right]<pivot)) right--;
    if (pivot <= arr[left] && arr[right] < pivot) {
      arr = swap(arr,left,right);
      left++;
      right--;
    }
  }
  if(!(pivot <= arr[left])) left++;
  if(!(pivot <= arr[left])) left++;
  const arr1 = arr.slice(0,left);
  const arr2 = arr.slice(left,arr.length);
  return quickSort(arr1).concat(quickSort(arr2));
}

const arr = [9,2,1,4,6,7,3,2,4,5,34,31,6,780,67,34,234,46,34,12,34,56,78,1];
const result = quickSort(arr); // n logn complexity
console.log(result);