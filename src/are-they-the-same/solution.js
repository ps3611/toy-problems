function comp(array1, array2){
  if (!array1 || !array2) return false;
  let array1squared = array1.map(el => el*el);
  for (var i = 0; i < array1squared.length; i++) {
    if(!array2.includes(array1squared[i])) return false;
    array2.splice(array2.indexOf(array1squared[i]), 1);
  }
  return true
}

const array1 =  [2,2,3];
const array2 = [4,9,9];
const result = comp(array1, array2); //n complexity
console.log(result);