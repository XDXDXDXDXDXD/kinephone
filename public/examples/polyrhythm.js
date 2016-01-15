// PolyRhythm Visualizer for Kinephone
// Last Modified 1/15/2016
// Brian Tice

var frame = 0;
var divisionsPerMeasure = 24;
var currentRow = 0;

var pin = 0;

var pinTwo = 0;

return function() {                 // this function will run at each frame

   
    // Four Over Four Time Signature 
    
    
    currentRow = frame % divisionsPerMeasure;
    pin = currentRow * 24;
    pinTwo = currentRow * 24 + 5;
    
    if( currentRow == 0 ) {
        xForm.setPinHeight(pin,1);
        xForm.setPinHeight(pin + 432,0);
    }
    else if( currentRow == 6) {
        xForm.setPinHeight(pin,1);
        xForm.setPinHeight(pin - 144,0);
    }
    else if ( currentRow == 12 ) {
        xForm.setPinHeight(pin,1);
        xForm.setPinHeight(pin - 144,0);
    }
    else if ( currentRow == 18 ) {
        xForm.setPinHeight(pin,1);
        xForm.setPinHeight(pin - 144,0);
    }
    
    // Three Over Three Time Signature
    
    if( currentRow == 0 ) {
        xForm.setPinHeight(pinTwo,1);
        xForm.setPinHeight(pinTwo + 384,0);
    }
    else if( currentRow == 8 ){
        xForm.setPinHeight(pinTwo,1);
        xForm.setPinHeight(pinTwo - 192,0);
    }
    else if( currentRow == 16 ) {
        xForm.setPinHeight(pinTwo,1);
        xForm.setPinHeight(pinTwo - 192,0);
    }
    
    
    frame++;
    
    
    
    
    
}
