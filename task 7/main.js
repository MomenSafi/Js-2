let favoriteDrink = prompt("enter your favorite drink");
let item = { banana: 20, orange: 10 }
if(favoriteDrink.toLowerCase() === "banana")
    document.write(`“The price of a banana drink is ${item.banana} dollars`)
else
    document.write(`“The price of a banana drink is ${item.orange} dollars`)
