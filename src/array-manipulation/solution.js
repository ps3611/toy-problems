function arrayManipulation(n, queries) {
  let current = new Array(n).fill(0);
  for (var i = 0; i < queries.length; i++) {
    let query = queries[i];
    let start = query[0];
    let end = query[1];
    let toAdd = query[2];
    for (var j = start-1; j < end; j++) {
      current[j] += toAdd;
    }
  }
  return Math.max(...current);
}

const queries = [[1,2 ,100],[2, 5 ,100],[3, 4 ,100]];
const n = 5;
const result = arrayManipulation(n, queries); //n2 complexity
console.log(result);
