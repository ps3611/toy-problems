function sqInRect(lng, wdth){
  if (!arguments[2] && lng === wdth) return null;
  let result = [];
  if(lng === wdth) return [lng];
  const minSide = Math.min(lng, wdth);
  const maxSide = Math.max(lng, wdth);
  result.push(minSide);
  return result.concat(sqInRect(minSide,maxSide-minSide,true));
}

const lng = 5;
const wdth = 3;
const result = sqInRect(lng, wdth); //n complexity
console.log(result);