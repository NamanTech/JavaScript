var arr = [1, 2, 2 , 3 , 3 , 3];

var filteredArray = arr.filter(function(item, pos){
  // console.log(arr.indexOf(item));
  return arr.indexOf(item)== pos; //compare each item to position
});

console.log( filteredArray );