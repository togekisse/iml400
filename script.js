//MOUSE PATH CREDIT: Used my handy dandy Inspect console on (https://brasme.fr) and did lots of poring over Paper.js documentation AND I DID IT AAAAAAAA and it only took 2 days of my precious time during finals. Took a while because I don't think Brackets supports text/paperscript styling. Worth it kinda.

var points = 15;
var length = 10;

var path = new Path({
    strokeColor: '#0000FF',
    strokeWidth: 20,
    strokeCap: 'square'
});

var start = view.center / [10, 1];
for (var i = 0; i < points; i++)
    path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
    path.firstSegment.point = event.point;
    for (var i = 0; i < points - 1; i++) {
        var segment = path.segments[i];
        var nextSegment = segment.next;
        var vector = segment.point - nextSegment.point;
        vector.length = length;
        nextSegment.point = segment.point - vector;
    }
    path.smooth({
        type: 'continuous'
    });
}
