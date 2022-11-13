// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (!input || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    
    input = input.toLowerCase();
    
    let message = "";
    
    if (encode === true) {
      // encode message
      for (let i = 0; i < input.length; i++) {
          let match = input[i];
          let alphabetPosition = alphabet.indexOf(match);
          
          if (alphabetPosition === -1) {
            message += match;
            continue;
          }
            
          let shiftPosition = alphabetPosition + shift;
          if (shiftPosition > 25) { shiftPosition -= 26 }
          if (shiftPosition < 0) { shiftPosition += 26 }
          let shiftChar = alphabet.charAt(shiftPosition);
          
          message += shiftChar;
      }
    } else {
      // decode message
      for (let i = 0; i < input.length; i++) {
        let match = input[i];
        let alphabetPosition = alphabet.indexOf(match);
        
        if (alphabetPosition === -1) {
          message += match;
          continue;
        }
          
        let shiftPosition = alphabetPosition - shift;
        if (shiftPosition > 25) { shiftPosition -= 26 }
        if (shiftPosition < 0) { shiftPosition += 26 }
        let shiftChar = alphabet.charAt(shiftPosition);
        
        message += shiftChar;
    }
    }
    
    console.log(message);
    
    return message
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
