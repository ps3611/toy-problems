function checkMagazine(magazine, note) {
  const magazineArray = magazine.split(' ');
  const noteArray = note.split(' ');
  for (var word = 0; word < noteArray.length; word++) {
    if(!magazineArray.includes(noteArray[word])) return 'No';
  }
  return 'Yes';
}

const magazine = 'give me one grand today night';
const note = 'give one grand today';
const result = checkMagazine(magazine, note);
console.log(result);