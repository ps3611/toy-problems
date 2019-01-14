function countingValleys(n, s) {
  let valleys = 0;
  let current = 0;
  for (var i = 0; i < s.length; i++) {
    s[i]=== 'U' ? current++ : current--;
    if (current === 0 && s[i]==='U') valleys++;
  }
  return valleys;
}

const s = ['U','D','D','D','U','D','U','U'];
const result = countingValleys(s.length, s);
console.log(result);