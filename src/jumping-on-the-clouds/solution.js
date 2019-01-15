function jumpingOnClouds(c) {
  let jumps = 0;
  let current = 0;
  while (current !== c.length-1) {
    current++;
    jumps++;
    if (c[current+1] === 0) current++;
  }
  return jumps;
}

const c = [0, 0, 0, 1, 0, 0];
const result = jumpingOnClouds(c); //linear complexity
console.log(result);