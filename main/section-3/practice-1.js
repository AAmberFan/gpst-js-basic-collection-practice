'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(function(ele){
    if(objectB.value.includes(ele.key)){
      //console.log("!");
      ele.count-=1;
    }
    return ele;
  });
}
// const collectionA = [
//   {key: 'a', count: 2},
//   {key: 'e', count: 2},
//   {key: 'h', count: 2},
//   {key: 't', count: 2},
//   {key: 'f', count: 2},
//   {key: 'c', count: 2},
//   {key: 'g', count: 2},
//   {key: 'b', count: 2},
//   {key: 'd', count: 2}
// ];
//
// const objectB = {value: ['a', 'd', 'e', 'f']};
// console.log(createUpdatedCollection(collectionA, objectB));
