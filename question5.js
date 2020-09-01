var array = []
var squareArray = [];
function getArrayItem(value) {
  return new Promise((resolve, reject) => {
    var result;
    if (value <= 1) {
      result = '1';
    }
    else {
      array.push(value);
      result = getArrayItem(value - 1) + value;
    }
    return result;
  })
}
getArrayItem(100);
array = array.reverse();
getSquareOfEvenNumber(array)
  .then((value) => {
    console.log(squareArray.reduce((j, k) => j + k, 0))
  })
  .catch(() => { return "Odd number is passed"; })

function getSquareOfEvenNumber(value) {
  if (value.length) {
    return new Promise((resolve, reject) => {
      let totalItem = [];
      let countOfError = 0;
      value.map((item) => {
        totalItem.push(item);
        if (item % 2 != 0) countOfError = countOfError + 1;
      })
      console.log("Number of errors ", countOfError)
      console.log("The resultant array ",totalItem.reduce((j, k) => j + k, 0))
      console.log("Number of objects in the resultant array ", value.length)
      resolve(totalItem);
    })
  }
}