function rotLeft(a, d) {
  const cut = d % a.length;
  return a.slice(cut,a.length).concat(a.slice(0,cut));
}

const a = [1,2,3,4,5];
const d = 0;
const result = rotLeft(a, d);
console.log(result);