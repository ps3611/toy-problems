function areAnagrams(s1,s2){
  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  return (s1===s2) ? true : false;
}

function sherlockAndAnagrams(s) {
  let count = 0;
  for (var len = 1; len < s.length; len++) { //anagram length
    for (var i = 0; i <= s.length-len; i++) {
      let s1 = s.substring(i, i+len);
      for (var j = i+1; j <= s.length-len; j++) {
        let s2 = s.substring(j,j+len);
        if (areAnagrams(s1,s2)) count++;
      }
    }
  }
  return count;
}

const s = 'qifaiqluhkqq';
const result = sherlockAndAnagrams(s); //n3 complexity
console.log(result);

