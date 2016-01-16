

/////////////
// 120 BMP //
/////////////

// this runs at appx 120 bpm
var frame = 0;
var fpm = 12; // frames per measure
var row = 0;  // which row we are on

var tick, pin;

return function() {     // this function runs at each frame
    tick = frame % fpm;
    switch (tick) {
        case 0:
            xForm.setPinHeight(0, row, 1); // making the pin go up to a height of 1 is loudest sound
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            xForm.setPinHeight(3, row, 0.5);   // 0.5 makes a softer sound
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            xForm.setPinHeight(6, row, 0.5);
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            xForm.setPinHeight(9, row, 0.5);
            break;
        case 10:
            break;
        case 11:
            row++;  // When we're done with the measure, we increment the row
            break;
    }
    frame++;
}

////////////
// 96 BMP //
////////////

var frame = 0;
var fpm = 16; // frames per measure
var row = 0;  // which row we are on

var tick, pin;

return function() {     // this function runs at each frame
    tick = frame % fpm;
    pin = row * 24;
    switch (tick) {
        case 0:
            xForm.setPinHeight(pin, 1);
            break;
        case 1:
            xForm.setPinHeight(pin + 1, 0.5);
            break;
        case 2:
            xForm.setPinHeight(pin + 2, 0.5);
            break;
        case 3:
            xForm.setPinHeight(pin + 3, 0.5);
            break;
        case 4:
            xForm.setPinHeight(pin + 4, 1);
            break;
        case 5:
            xForm.setPinHeight(pin + 5, 0.5);
            break;
        case 6:
            xForm.setPinHeight(pin + 6, 0.5);
            break;
        case 7:
            xForm.setPinHeight(pin + 7, 0.5);
            break;
        case 8:
            xForm.setPinHeight(pin + 8, 1);
            break;
        case 9:
            xForm.setPinHeight(pin + 9, 0.5);
            break;
        case 10:
            xForm.setPinHeight(pin + 10, 0.5);
            break;
        case 11:
            xForm.setPinHeight(pin + 11, 0.5);
            break;
        case 12:
            xForm.setPinHeight(pin + 12, 1);
            break;
        case 13:
            xForm.setPinHeight(pin + 13, 0.5);
            break;
        case 14:
            xForm.setPinHeight(pin + 14, 0.5);
            break;
        case 15:
            xForm.setPinHeight(pin + 15, 0.5);
            row++;
            break;
    }
    frame++;
}
