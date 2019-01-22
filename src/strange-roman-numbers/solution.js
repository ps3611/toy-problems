function solve(n){
  let arr = [1,5,10,50];
  for (var i = 1; i < n; i++) {
    arr = arr.map(el => [el+1,el+5,el+10,el+50]);
    arr = [].concat.apply([], arr);
    arr = [...new Set(arr)];
  }
  return arr.length;
}

const n = 10000000;
const result = solve(n); //n2 complexity
console.log(result);