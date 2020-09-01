var array = []
var squareArray = [];
function getArrayItem(value) {
  return new Promise((resolve, reject) => {
    var result;
    if (value <= 1) {
      result = '1';
    }
    else {
      if (value % 2 === 0) array.push(value);
      result = getArrayItem(value - 1) + value;
    }
    return result;
  })
}
getArrayItem(100);
array = array.reverse();
console.log(array)
console.log(array.reduce((j, k) => j + k, 0))

getSquareOfEvenNumber(array)
  .then((value) => {
    console.log(squareArray.reduce((j, k) => j + k, 0))
  })
  .catch(() => { return "Odd number is passed"; })

function getSquareOfEvenNumber(value) {
  if (value.length) {
    return new Promise((resolve, reject) => {
      let squareOfArray = [];
      value.map((item) => {
        if (item % 2 === 0) squareOfArray.push(item * item);
        else reject();
      })
      resolve(squareOfArray);
    })
  }
}
