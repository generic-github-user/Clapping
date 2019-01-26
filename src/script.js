var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
                  ctx.fillStyle = 'hsla(' + row[j] * 360 + ', 100%, 50%, 1)';
                  ctx.fillRect(
                        j * width,
                        i * height,
                        width,
                        height
                  );
            }
      }
}
render();