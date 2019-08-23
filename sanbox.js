/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    |-n
    |o|
    n-|

  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |
    - Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
    - Minimal panjang karakter yang diinput adalah 3. Tampilkan 'Invalid input' jika kondisi ini tidak terpenuhi.
*/

function diagonAlley(str){
  if(str.length < 3 ){
    console.log('Invalid Input');
  }
  var output = '';
  for(var i = 0; i < str.length && str.length >= 3; i++){
    if(i != str.length-1){
      output += '|';
    }
    
    for(var j = 0; j < str.length-(2+i); j++){
      output += '-'
    }

    output += str[i]

    for(var j = i-1; j > 0; j--){
      output += '-'
    }
    
    if(i >= 1){
      output += '|';
    }

    console.log(output)
    output = ''
  }
  
}

function diagonAlley3(str){
  
  for(var i = 0; i < str.length; i++){
    var output = '';
    for(var j = 0; j < str.length; j++){
      if(j == str.length - 1 - i){
        output += str[i]
      }
      else if(j == 0 || j == str.length - 1){
        output += '|'
      }
      else{
        output += '-'
      }
    }
    console.log(output)
  }
}

// TEST CASES
diagonAlley('kuroko')
/*
  |----k
  |---u|
  |--r-|
  |-o--|
  |k---|
  o----|
*/
console.log('')

diagonAlley('non')
/*
  |-n
  |o|
  n-|
*/
console.log('')

diagonAlley('basuke')
/*
  |----b
  |---a|
  |--s-|
  |-u--|
  |k---|
  e----|
*/
console.log('')

// diagonAlley('ba')

diagonAlley('no')
// Invalid input