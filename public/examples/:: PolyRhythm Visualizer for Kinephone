// PolyRhythm Visualizer for Kinephone
// Last Modified 1/15/2016
// Brian Tice


var frame = 0;
var divisionsPerMeasure = 24;
var currentRow = 0;

var pin = 0;

return function() {                 // this function will run at each frame

    /*xForm.setPinHeight(pin,1);
    pin++;
    
    if(pin == 575) {
        pin = 0;
    }*/
    
    currentRow = frame % divisionsPerMeasure;
    pin = currentRow * 24;
    
    if( currentRow == 0 ) {
        xForm.setPinHeight(pin,1);
        xForm.setPinHeight(pin + 432,0);
    }
    else if( currentRow == 6) {
        xForm.setPinHeight(pin,1);
        xForm.setPinHeight(pin-144,0);
    }
    else if ( currentRow == 12 ) {
        xForm.setPinHeight(pin,1);
        xForm.setPinHeight(pin-144,0);
    }
    else if ( currentRow == 18 ) {
        xForm.setPinHeight(pin,1);
        xForm.setPinHeight(pin-144,0);
    }
    
    frame++;
    
    
    // xForm.setPinHeight(24,1);
    // xForm.setPinHeight(24+23,1);
    
    
}