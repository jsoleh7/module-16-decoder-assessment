// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
const normAlphabet = 'abcdefghijklmnopqrstuvwxyz'

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26 || typeof(alphabet) !== 'string'){return false}

    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (i === j) {
          continue
        }
        
        if (alphabet[i] === alphabet[j]) {
          return false
        }
      }
    }
    
    let encoded = "";
    let decoded = "";


    //encode
    if(encode === true){
      for(let i = 0; i < input.length; i++){
        
          if (input[i] === " ") {
            encoded += " ";
          }
          for(let a = 0; a < normAlphabet.length; a++){
            if(input[i].toLowerCase() === normAlphabet[a]){
              encoded += alphabet[a]}
            }
          }
         return encoded 
      }
  
    //decode
    if(encode === false){
      for(let i = 0; i < input.length; i++){
        
          if (input[i] === " ") {
            decoded += " ";
          }
          for(let a = 0; a < alphabet.length; a++){
            if(input[i] === alphabet[a]){
              decoded += normAlphabet[a]}
            }
          }
         return decoded 
      }

  }
 
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
