function sockMerchant(n, ar) {
  let counter = 0;
  while (ar.length > 0) {
    let sock = ar.shift();
    let i = ar.indexOf(sock);
    if (i > -1) {
      ar.splice(i, 1);
      counter++;
    }
  }
  return counter;
}

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const result = sockMerchant(ar.length, ar);
console.log(result);