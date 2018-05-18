'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  return transToArray(countObject(collectionA)).map(function(ele){
    if(objectB.value.includes(ele.key)){
      ele.count-= Math.floor(ele.count/3);
    }
    return ele;
  });
}
var countObject = function(collection){
  let mySet = {};
  collection.forEach(function(ele){
    let eleNum = ele.split(/[-\:\[\]]/);
    //console.log(eleNum+','+eleNum.length);
    if(mySet[eleNum[0]]==null){
      mySet[eleNum[0]]=(eleNum.length===1)?1:parseInt(eleNum[1]);
    }else{
      mySet[eleNum[0]]+=(eleNum.length===1)?1:parseInt(eleNum[1]);
    }
  });
  return mySet;
};
function transToArray(mySet){
  //console.log(typeof(mySet));
  let res = [];
  for(let i in mySet){
    res.push({'key':i,'count':mySet[i]});
  }
  return res;
}
