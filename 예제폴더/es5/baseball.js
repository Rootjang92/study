function baseballGame(num) {
  let myNum = num.toString();
  let comNum = '369';
  comNum = comNum.split('');
  myNum = myNum.split('');
  if(isOverlap(myNum)) return '중복 안됨.'
  return isNum(comNum, myNum);
}

function isOverlap(arr) {
  var sorted_arr = arr.slice().sort();
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      return true;
    } else {
      return false;
    }
  }
}

function isNum(comNum, myNum) {
  let strike = isStrike(comNum, myNum);
  let ball = isBall(comNum, myNum);

  if (strike === 3) return '성공입니다. 게임 종료';
  return 'Strike: ' + strike + '\nBall: ' + ball;
}

function isStrike(comNum, myNum) {
  let strike = 0;
  for (let i = 0; i < comNum.length; i++) {
    if (myNum[i] === comNum[i]) strike++;
  }
  return strike;
}

function isBall(comNum, myNum) {
  let ball = 0;
  for (let i = 0; i < comNum.length; i++) {
    for (let j = 0; j < comNum.length; j++) {
      if (myNum[j] === comNum[j] && i !== j) ball++;
    }
  }
  return ball;
}

console.log(baseballGame(369));