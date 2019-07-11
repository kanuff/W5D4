



Array.prototype.myEach = function(callBack){
  for(let i = 0; i < this.length; i++) {
    callBack(this[i]);
  }
}


Array.prototype.myMap = function(callBack){
  const result = [];
  this.myEach(el => { result.push( callBack(el) ) } );
  return result;
}

Array.prototype.myReduce = function (callback, initialValue){
  // debugger
  let dup = this;

  if(initialValue === undefined){
    initialValue = this[0];
    dup = dup.slice(1);
  }

  let acc = initialValue;
  // debugger

  dup.myEach(el => acc = callback(acc, el));
  return acc;
  // this.myEach(callback(el, intial?) )

}