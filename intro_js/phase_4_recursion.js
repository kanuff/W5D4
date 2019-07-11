function range(start, end) {
  // debugger
  if (start === end) {
    return [start];
  }
  let result = range(start, (end - 1));
  // debugger
  result.push(end);
  // debugger
  return result;
}

function sumRec(arr) {
  // debugger
  if (arr[0]===arr[arr.length-1]){
    return arr[0];
  }
  let result = arr[0] + sumRec(arr.slice(1));
  return result;
}

function exponent(base, exp) {
   if(exp===0){
     return 1;
   }
   let result = base * exponent(base,exp-1);
   return result;
}

