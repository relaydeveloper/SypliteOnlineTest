var array = []
function getArrayItem(size){
    let result;
    if(size <= 1){
      array.push(size);
      result = '1';
    }
    else{
      array.push(size);
      result = getArrayItem(size-1) + size;
    }
    return result;
}
getArrayItem(100);
console.log(array.reverse())