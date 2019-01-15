function oneHourglassSum(arr, i, j) {
  return arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
}

function hourglassSum(arr) {
  let result = oneHourglassSum(arr,0,0);
  for (var i = 0; i < arr.length-2; i++) {
    for (var j = 0; j < arr.length-2; j++) {
      let hg = oneHourglassSum(arr,i,j);
      if(result < hg) result = hg;
    }
  }
  return(result);
}

const arr = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0],
];
const result = hourglassSum(arr); //n2 complexity
console.log(result);