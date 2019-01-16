function hist(s) {
  const sArray = s.split('');
  const errors = ['u','w','x','z'];
  const counter = [0,0,0,0];
  for (var i = 0; i < sArray.length; i++) {
    if (!errors.includes(sArray[i])) continue;
    if (sArray[i]===errors[0]) counter[0]++;
    if (sArray[i]===errors[1]) counter[1]++;
    if (sArray[i]===errors[2]) counter[2]++;
    if (sArray[i]===errors[3]) counter[3]++;
  }
  const arr = [];
  for (var i = 0; i < counter.length; i++) {
    arr.push(`${errors[i]}  ${counter[i]}     ${'*'.repeat(counter[i])}`)
  }
  return arr.join('\r');
}

const s = 'uuaaaxbbbbyyhwawiwjjjwwxymzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';
const result = hist(s); //n complexity
console.log(result);