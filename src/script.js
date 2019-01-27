var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// https://gist.github.com/AugustMiller/85b54d49493bb71ba81e
const map = (num, in_min, in_max, out_min, out_max) => {
      return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var crowd = [];
var settings = {
      'crowd': {
            'size': {
                  'x': 100,
                  'y': 100
            }
      }
};
s = settings;

for (var i = 0; i < s.crowd.size.x; i++) {
      var row = [];
      for (var j = 0; j < s.crowd.size.y; j++) {
            row.push(Math.random());
      }
      crowd.push(row);
}

var width = canvas.width / s.crowd.size.x;
var height = canvas.height / s.crowd.size.y;

function render() {
      for (var i = 0; i < crowd.length; i++) {
            var row = crowd[i];
            for (var j = 0; j < row.length; j++) {
                  var hue = map(row[j], 0, 1, 200, 250);
                  ctx.fillStyle = 'hsla(' + hue + ', 100%, 50%, 1)';
                  ctx.fillRect(
                        j * width,
                        i * height,
                        width + 1,
                        height + 1
                  );
            }
      }
}
render();
function update() {
      var last_step = JSON.parse(JSON.stringify(crowd));
      for (var i = 0; i < crowd.length; i++) {
            for (var j = 0; j < row.length; j++) {
                  crowd[i][j] = last_step[i][j] + 0.1;
            }
      }
      render();
}
