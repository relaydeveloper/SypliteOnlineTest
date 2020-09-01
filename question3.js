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

getSquareOfEvenNumber(array)
  .then((value) => { 
    squareArray.push(value);
    console.log(squareArray);
   })
   .catch(()=>{ return "Odd number is passed"; })

function getSquareOfEvenNumber(value) {
  if (value.length) {
    return new Promise((resolve, reject) => {
      let evenNumber = [];
      value.map((item) => {
        if (item % 2 === 0) evenNumber.push(item);
        else reject();
      })
      resolve(evenNumber);
    })
  }
}
