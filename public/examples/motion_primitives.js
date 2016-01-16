// FOUR AT ONCE

   var MIN_HEIGHT = 0.25;      // so that the cap won't fall off
   var RETRACT_AMOUNT = 0.025;  // fast enough to retract a good amount, slow enough not to be audible

   var frame = 0;
   var fpm = 28;
   var tick;


   var activePins = [
       {x: 1, y: 0, hit: false},
       {x: 1, y: 2, hit: false},
       {x: 1, y: 4, hit: false},
       {x: 1, y: 6, hit: false},
   ];

   function activatePins(activePins, shapeDisplay) {
       activePins.map(function(pin) {
          shapeDisplay.setPinHeight(pin.x, pin.y, 1);
       });
   }
   activatePins(activePins, xForm);

   return function() {
       tick = frame % fpm;

       switch (tick) {
           case 0:
               xForm.setPinHeight(1, 0, MIN_HEIGHT);
               activePins[0].hit = true;
               break;
           case 7:
               xForm.setPinHeight(1, 2, MIN_HEIGHT);
               activePins[0].hit = true;
               break;
           case 14:
               xForm.setPinHeight(1, 4, MIN_HEIGHT);
               activePins[0].hit = true;
               break;
           case 21:
               xForm.setPinHeight(1, 6, MIN_HEIGHT);
               activePins[0].hit = true;
               break;
       }

       activePins.map(function(pin) {
           if (pin.hit)
               pin.hit = false;
           else
               xForm.pinHeightPlus(pin.x, pin.y, RETRACT_AMOUNT, 1);
       });
       frame ++;
   };
/////////////////////////////////////////////////////////////////////////////////

// TESTING MOVEMENT OF ONE BEAT
// DOWN to make sound - volume is good for cap fillers

var frame = 0;
var fpm = 30;

var MIN_HEIGHT = 0.25;
var RETRACT_AMOUNT = 0.025;  // fast enough to retract a good amount, slow enough not to be audible

var height = 1;
var tick;

return function() {
    tick = frame % fpm;

    // pin jumps up on the downbeat
    if (tick === 0) {
      xForm.setPinHeight(1, 0, MIN_HEIGHT);
      xForm.setPinHeight(1, 2, MIN_HEIGHT);
      xForm.setPinHeight(1, 4, MIN_HEIGHT);
        height = MIN_HEIGHT;
    }

    // if it's not the downbeat, it slowly retracts to reset
    else {
      xForm.setPinHeight(1, 0, height);
      xForm.setPinHeight(1, 2, height);
      xForm.setPinHeight(1, 4, height);
        height = Math.min(height + RETRACT_AMOUNT, 1);
    }
    frame++;
};

/////////////////////////////////////////////////////////////////////////////////

// UP to make sound - not very loud

var frame = 0;
var fpm = 30;

var MIN_HEIGHT = 0.25;      // so that the cap won't fall off
var RETRACT_AMOUNT = 0.025;  // fast enough to retract a good amount, slow enough not to be audible

var height = 1;
var tick;

return function() {
    tick = frame % fpm;

    // pin jumps up on the downbeat
    if (tick === 0) {
        xForm.setPinHeight(1, 0, 1);
        xForm.setPinHeight(1, 2, 1);
        xForm.setPinHeight(1, 4, 1);
        height = 1;
    }

    // if it's not the downbeat, it slowly retracts to reset
    else {
        xForm.setPinHeight(1, 0, height);
        xForm.setPinHeight(1, 2, height);
        xForm.setPinHeight(1, 4, height);
        height = Math.max(height - RETRACT_AMOUNT, MIN_HEIGHT);
    }
    frame++;
};

/////////////////////////////////////////////////////////////////////////////////

// BEAT: ta ta DUM, ta ta DUM

      var MIN_HEIGHT = 0.25;      // so that the cap won't fall off
      var RETRACT_AMOUNT = 0.025;  // fast enough to retract a good amount, slow enough not to be audible

      var frame = 0;
      var fpm = 16; // frames per measure = how many frames are in a cycle
      var tick;


      var activePins = [
          {x: 1, y: 0, retract: false, retractUp: false},
          {x: 1, y: 2, retract: false, retractUp: true}
      ];

      function activatePins(activePins, shapeDisplay) {
          activePins.map(function(pin) {
             shapeDisplay.setPinHeight(pin.x, pin.y, 1);
          });
      }
      activatePins(activePins, xForm);

      return function() {
          tick = frame % fpm;

          switch (tick) {
            case 0:
                xForm.setPinHeight(1, 0, .5);
                activePins[0].retract = false;
                break;
            case 2:
                xForm.setPinHeight(1, 0, .75);
                activePins[0].retract = true;
                break;
            case 8:
                xForm.setPinHeight(1, 2, .25);
                activePins[1].retract = true;
                break;
                  }

          activePins.map(function(pin) {
              if (pin.retract) {
                if (pin.retractUp)
                    xForm.pinHeightPlus(pin.x, pin.y, RETRACT_AMOUNT, 1);
                else
                    xForm.pinHeightMinus(pin.x, pin.y, RETRACT_AMOUNT, MIN_HEIGHT);
              }
          });
          frame ++;
      };

/////////////////////////////////////////////////////////////////////////////////
