var array = []
function getArrayItem(value){
    var result;
    if(value <= 1){
      result = '1';
    }
    else{
      if (value % 2 ===0) array.push(value);
      result = getArrayItem(value-1) + value;
    }
    return result;
}
getArrayItem(100);
console.log(array.reverse())
