alert('Welcome to coffee store')
alert('cofee type 1-Latte,2-Cappuccino,3-Americano,4-Espresso,Doppio.')
let coffeType = prompt('what is the type of coffee you prefer')
console.log(coffeType)
let cofeeSweete = prompt('What Coffee Sweeteners you prefer')
console.log(cofeeSweete)
let Chocolat = prompt('which type of Chocolat you prefer')
console.log(Chocolat)


let B = prompt('solve the equation to win gift from our store the equation ibooks 2*y+x=77 x donate how mony types of coffee we have')
for (var y=0 ; y <=1 ; y++)
{if(B == 105){ alert ('congratulation! you win ') 
break; }
else{  B = prompt('Try again!')}
}
alert('your foveate coffee  ${coffeeType} the level of sweeteners  ${cofeeSweete} your fovear Chocolat is ${Chocolat}');


