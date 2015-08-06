document.getElementById('btntest').addEventListener('click', fnTest, false);
function fnTest () {
  console.log('This function have ' + arguments.length + ' Arguments');
}

function fnPerson (firstName, secondName) {
  this.firstName = firstName;
  this.secondName = secondName;
}

var Saad = new fnPerson('Ashutosh', 'Singh');
console.log(Saad.firstName + Saad.secondName);
