function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) return '';
    const lenArr = strarr.map(str => str.length);
    const bindArr = [];
    for (var i = 0; i < lenArr.length-k+1; i++) {
      bindArr.push(lenArr.slice(i,i+k).reduce((a, b) => a + b, 0));
    }
    const maxi = bindArr.indexOf(Math.max(...bindArr));
    return strarr.slice(maxi,maxi+k).join('');
}

const strarr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
const k = 4;
const result = longestConsec(strarr, k); //n complexity
console.log(result);