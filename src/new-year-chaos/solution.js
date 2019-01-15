function swap(arr, i, j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function minimumBribes(q) {
  let count = 0;
  const maxLen = q.length;
  for (var person = maxLen; 0 < person; person--) {
    let personLoc = q.indexOf(person);
    if(personLoc+1 < person-2) return 'too chaotic';
    if(personLoc+1 == person-2) {
      q = swap(q,personLoc,personLoc+1);
      q = swap(q,personLoc+1,personLoc+2);
      count+=2;
    }
    if(personLoc+1 == person-1) {
      q = swap(q,personLoc,personLoc+1);
      count++;
    }
  }
  return count;
}

const q = [1, 2, 5 ,3 ,7 ,8 ,6 ,4];
const result = minimumBribes(q);
console.log(result);
