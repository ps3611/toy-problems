function maximumToys(prices, k) {
  let count = 0;
  let basket = 0;
  const sortedPrices = prices.sort((a,b)=>a-b);
  while (basket < k) {
    basket += sortedPrices[count];
    count++;
  }
  return Math.max(count-1,0);
}

const prices = [1, 12, 5 ,111, 200, 1000, 10];
const k = 50;
const result = maximumToys(prices, k); // linear complexity
console.log(result);
