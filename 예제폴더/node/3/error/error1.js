setInterval(() => {
  console.log('start');
  try {
    throw new Error('서버 고장 ㅋㅋ');
  } catch (err) {
    console.error(err);
  }
}, 1000);