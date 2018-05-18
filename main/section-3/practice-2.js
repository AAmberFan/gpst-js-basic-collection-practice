'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  return collectionA.map(function(ele,index){
    if(objectB.value.includes(ele.key)){
      ele.count-=Math.floor(parseInt(ele.count/3));
    }
    return ele;
  });
}
