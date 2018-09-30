module.exports = function check(str, bracketsConfig) {
  // your solution
  const arrStr = str.split("");
  const arrStrNew = [];
  const strLength = str.length;
  const configLength = bracketsConfig.length;

  for (let i = 0; i < strLength; i++) {

    for (let j = 0; j < configLength; j++) {
      
      if (bracketsConfig[j][0] == arrStr[i] && bracketsConfig[j][1] == arrStr[i + 1]) {
        arrStrNew.push(arrStr.splice(i, 2));
        i = -1;
      }
    }
  }
  
  return arrStrNew.length * 2 == strLength ? true : false;
}
