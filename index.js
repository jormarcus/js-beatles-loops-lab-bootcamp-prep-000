function theBeatlesPlay(arrayM, arrayI) {
  var arr = [];
  for (var i = 0; i < arrayM.length; i++) {
    arr.push(arrayM[i] + ' plays ' + arrayI[i]);
  }
  return arr;
}

function johnLennonFacts(factsArr) {
  var newArr = [];
  var i = 0;
  while (i <= factsArr.length) {
    newArr.push(factsArr[i] + '!!!')
    i++;
  }
  return newArr;
}
