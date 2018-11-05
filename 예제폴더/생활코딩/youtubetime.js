var times = document.querySelectorAll('.pl-video .pl-video-time .timestamp span');
var duration = 0;
for(var i = 0; i < times.length; i++) {
  var tag = times[i];
  var t = tag.innerText;

  t = t.split(':');
  var min = t[0];
  var sec = t[1];

  duration = duration + parseInt(sec) + parseInt(min*60);
};
console.log((duration/60)/60); // 17.464722222222225