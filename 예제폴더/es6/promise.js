function printLater(number) {
  return new Promise(
    (resolve, reject) => {
      if(number > 4) {
        return reject('number is greater than 4');
      }
      setTimeout(
        () => {
          console.log(number);
          resolve(number + 1);
        },1000)
    })
}

printLater(1)
  .then(num => printLater(num))
  .then(num => printLater(num))
  .then(num => printLater(num))
  .then(num => printLater(num))
  .catch(e => console.log(e));