'use strict';

module.exports = function countSameElements(collection) {
  return transToArray(countObject(collection));
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
    res.push({'name':i,'summary':mySet[i]});
  }
  return res;
}
// const collection = [
//   'a', 'a', 'a',
//   'e', 'e', 'e', 'e', 'e', 'e', 'e',
//   'h', 'h', 'h', 'h', 'h', 'h', 'h[3]', 'h', 'h',
//   't', 't-2', 't', 't', 't', 't', 't', 't', 't[10]',
//   'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
//   'c:8',
//   'g', 'g', 'g', 'g', 'g', 'g', 'g',
//   'b', 'b', 'b', 'b', 'b', 'b',
//   'd-5'
// ];
// console.log(countSameElements(collection));
