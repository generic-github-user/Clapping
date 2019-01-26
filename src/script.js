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