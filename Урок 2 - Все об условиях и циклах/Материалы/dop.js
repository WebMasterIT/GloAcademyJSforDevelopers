let number = 5;
alert(number++); //5

let num = [ ] + false - null + true;
alert(num); //Nan

let y = 1; 
let x = y = 2; 
alert(x); //2

let num2 = [ ] + 1 + 2;
alert(num2); //12


alert( "1"[0] ) //1



let num3 = 2 && 1 && null && 0 && undefined; 

alert( null || 2 && 3 || 4 ); //3


a = [1, 2, 3]; 
b = [1, 2, 3]; 
console.log(a==b); //false

alert( +"Infinity" );   //Infinity

let num4 = 0 || "" || 2 || undefined || true || falsе;
alert( num4 ); //2