function extraPerfect(n){
  const result = [];
  for (var i = 1; i <= n; i+=2) {
    if (i%2===1) result.push(i)
  }
  return result;
}

const n = 39;
const result = extraPerfect(n); //n complexity
console.log(result);