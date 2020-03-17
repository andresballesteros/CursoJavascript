let numberOne = 600;
let numberTwo = 100;
let result = numberOne + numberTwo;
let names = ["Andres", "Goku", "Vegeta", "Gohan"];
/*console.log(result);
for(let i = 0; i<names.length; i++){
    console.log("Hola "+names[i]);
}*/
console.log(names);
names.forEach(element => {
  console.log("Hola " + element);
});

function greeting(name) {
  console.log("Hola como estas " + name);
}

console.log(names);
names.forEach(element => {
  greeting(element);
});

function holamundo(){
  alert('Hola mundo desde función');
}
