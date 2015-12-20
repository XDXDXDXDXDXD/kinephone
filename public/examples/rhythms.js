
/////////////
// 120 BMP //
/////////////

// 1 down beat with 3 softer beats evenly spaced
var counter = 0;
var whichPin = 96;
return function () {
  if (counter%12 === 0) {
    xForm.setPinHeight(whichPin, 1);
    whichPin+=12;
  } else if (counter%12 == 3) {
      xForm.setPinHeight(whichPin+3, 0.75);
  } else if (counter%12 == 6) {
      xForm.setPinHeight(whichPin+6, 0.75);
  } else if (counter%12 == 9) {
      xForm.setPinHeight(whichPin+9, 0.75);
  }
  counter++;
};

///////////////////////////////////////////////

// Dotted quarter note
var counter = 0;
var whichPin = 96;
return function () {
  var beat = counter%12 + 1;
  switch(beat) {
    case 1:
        xForm.setPinHeight(whichPin, 1);
        whichPin+=12;
        break;
    case 10:
        xForm.setPinHeight(whichPin+9, 0.5);
        break;
    case 11:
        xForm.setPinHeight(whichPin+10, 0.5);
        break;
    case 12:
        xForm.setPinHeight(whichPin+11, 0.5);
    break;
  }

  counter++;
};
