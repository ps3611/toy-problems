function twoStrings(s1, s2) {
  let s1Letters = s1.split('');
  let s2Letters = s2.split('');
  for (var i = 0; i < s1Letters.length; i++) {
    if(s2Letters.includes(s1Letters[i])) return 'YES';
  }
  return 'NO';
}

const s1 = 'hello';
const s2 = 'ward';
const result = twoStrings(s1, s2);
console.log(result);