 'use strict';

module.exports = function countSameElements(collection) {
  return transToArray(countObject(collection));
}
function countObject(collection){
  let mySet = {};
  collection.forEach(function(ele){
    ele = ele.split(/-/);
    if(mySet[ele[0]]==null){
      mySet[ele[0]]=(ele.length==1)? 1:parseInt( ele[1]);
    }else{
      mySet[ele[0]]+=(ele.length==1)? 1:parseInt( ele[1]);
    }
  });
  return mySet;
}
function transToArray(mySet){
  let res = [];
  for(let i in mySet){
    res.push({"key":i,"count":mySet[i]});
  }
  return res;
}
