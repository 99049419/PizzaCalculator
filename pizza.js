// const pizzaS = 6;
// const pizzaM = 8;
// const pizzaL = 12;
// var pizzaChoice = prompt("Kies een groote\nSmall/Medium/Large");
// var pizzaCount = 0;
// var pizzaSelected = false;
// var pizzaOrderComplete = false;
// var pizzaTotal = 0;

// function askPizza(){



// }

// while (!pizzaSelected) {
//   switch (pizzaChoice.toString()) {
//     case "Small":
//       pizzaSelected = true;
//       pizzaCount = prompt("Hoeveel pizzas wilt u?");
//       pizzaTotal += pizzaCount*pizzaS;
//       break;
//     case "Medium":
//       pizzaSelected = true;
//       pizzaCount = prompt("Hoeveel pizzas wilt u?");
//       pizzaTotal += pizzaCount*pizzaM;
//       break;
//     case "Large":
//       pizzaSelected = true;
//       pizzaCount = prompt("Hoeveel pizzas wilt u?");
//       pizzaTotal += pizzaCount*pizzaL;
//       break;
//     default:
//       pizzaChoice = prompt(choiceMessage);
//       break;
//   }
// }

// document.write(`${pizzaCount} ${pizzaChoice} pizza(s) x €${pizzaTotal/pizzaCount}<br>Te betalen: €${pizzaTotal}`)

const pizzaS = 6;
const pizzaM = 8;
const pizzaL = 12;
var pizzaCountS = prompt("Hoeveel kleine pizza(s)?");
var pizzaCountM = prompt("Hoeveel medium pizza(s)?");
var pizzaCountL = prompt("Hoeveel grote pizza(s)?");
document.write(`Kleine pizza's ${pizzaCountS} x €${pizzaS}<br>`);
document.write(`Medium pizza's ${pizzaCountM} x €${pizzaM}<br>`);
document.write(`Grote pizza's ${pizzaCountL} x €${pizzaL}<br>`);
pizzaCountS = pizzaCountS*pizzaS;
pizzaCountM = pizzaCountM*pizzaM;
pizzaCountL = pizzaCountL*pizzaL;
document.write(`<br>Te betalen: €${pizzaCountS+pizzaCountM+pizzaCountL}`);



