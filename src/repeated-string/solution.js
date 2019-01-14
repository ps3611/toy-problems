function repeatedString(s, n) {
  const a_in_s = (s.match(/a/g) || []).length;
  const s_full = Math.floor(n/s.length);
  const s_remainder = n % s.length;
  const s_cut = s.slice(0,s_remainder);
  const a_in_s_cut = (s_cut.match(/a/g) || []).length;
  return a_in_s * s_full + a_in_s_cut;
}

const s = 'aba';
const n = 10;
const result = repeatedString(s, n);
console.log(result);