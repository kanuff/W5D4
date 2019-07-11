
Array.prototype.uniq = function() {
  const result = [];
  for(let i = 0; i < this.length; i++){
    if(!result.includes(this[i])){
      result.push(this[i]);  
    }
  }
  return result;
}

// const PairSum = function(x, y){
//   return x + y === 0;
// } 

// this.forEach(PairSum(x,y))

Array.prototype.twoSum = function() {
  const result = [];
  for(let i = 0; i < this.length; i++){
    for(let j = 0; j < this.length; j++){
      if (j > i ){
        if (this[i] + this[j] === 0) {
          result.push([i, j]);
        }
      }
    }
  }
  return result;
}

Array.prototype.transpose = function() {
  const outer = [];
  for(let i = 0; i < this.length; i++){
    const inner = [];
    for(let j = 0; j < this[i].length; j++){
      inner.push(this[j][i]);
    }
    outer.push(inner);
  }
  return outer;
}