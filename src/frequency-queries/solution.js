function freqQuery(queries) {
  const data = {};
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let command = query[0];
    let element = query[1];
    if (command === 1) {
      if (Object.keys(data).includes(element.toString())) data[element]++;
      else data[element] = 1;
    } else if (command === 2) {
      if (Object.keys(data).includes(element.toString())) data[element --;
    } else if (command === 3) {
      let toLog = 0;
      for (var el in data) {
          if(data[el] === element) toLog = 1;
      }
      result.push(toLog);
    }
  }
  return result;
}

const queries = [
[1, 6],
[3 ,1],
[1, 10],
[1, 10],
[1, 6],
[2, 10],
[1, 6],
[3, 3]];
const result = freqQuery(queries);
console.log(result);