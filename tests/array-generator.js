const arrayGenerator = (arrayLength, string) => {
  let array = []
  let words = ['Snarky', 'Puppy', 'Jumping', 'Wild'];
  for (let i = 0; i < arrayLength; i++) {
    if( string ){
      let word = words[Math.floor(Math.random()*words.length)];
      array.push(word);
    } else {
      array.push(Math.floor(Math.random()*arrayLength));
    }
  }
  return array;
}

module.exports = arrayGenerator;