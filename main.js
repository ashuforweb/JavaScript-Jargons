document.getElementById('btntest').addEventListener('click', fnTest, false);
function fnTest () {
  console.log('This function have ' + arguments.length + ' Arguments');
}

function fnPerson (firstName, secondName) {
  this.firstName = firstName;
  this.secondName = secondName;
}

var saad = new fnPerson('Ashutosh', 'Singh');
console.log(saad.firstName + saad.secondName);

document.getElementById('tst').addEventListener('click', fnTestLoop, false);

function fnTestLoop () {
  for (var i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log('I don\'t know what to print');
    }
  }
}
