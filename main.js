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
      console.log(i + 'fizzbuzz');
    } else if (i % 3 === 0) {
      console.log(i + 'fizz');
    } else if (i % 5 === 0) {
      console.log(i + 'buzz');
    } else {
      console.log(i + 'I don\'t know what to print');
    }
  }
}
document.getElementById('tstfn').addEventListener('click', fnHelp, false);

function fnHelp () {
  var foo = 10 + '20';
  console.log(foo);
}

document.getElementById('tstr').addEventListener('click', fnTestr, false);

function fnTestr () {
  var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
}


function fnAshu () {
  console.log('Ashutosh Singh');
}
