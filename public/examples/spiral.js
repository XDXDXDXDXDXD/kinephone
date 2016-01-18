
// this runs at appx 120 bpm
var frame = 0;
var fpm = 12; // frames per measure
var inc = 0;  // Increment

var centerX = 12;
var centerY = 12;

var tick, pin;

return function() {     // this function runs at each frame
    tick = frame % (fpm);

    if(tick % 3 === 0){ // 12 ticks -> 0, 3, 9,

        var a = 0.5;
        var b = 1.4;
        var radInc = inc/fpm;
        var rad = tick/fpm + radInc;

        var posX = parseInt( a * Math.cos(rad + rad) * Math.pow(Math.E, rad * b) ) + centerX;
        var posY = parseInt( a *  Math.sin(rad + rad) * Math.pow(Math.E, rad * b)  ) +  centerY;

         console.log(posX+" _ "+posY);
        xForm.setPinHeight(posX, posY, 1);
    }

    if(tick == 11){
        inc++;
    }

    frame++;
}
