// obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// }

// console.log(obj["name"]);

// let arr = ['plum', 'orange', 'apple'];
// console.log(arr[2]);

// let answer = prompt("Вам есть 18?", "18");

// console.log(typeof(answer));

 
///ДЗ #1

// let budget = prompt('Ваш бюджет?');
// let shopName = prompt('Название вашего магазина?');
// let firstProductType = prompt('Какой тип товаров будем продавать?');
// let secondProductType = prompt('Какой тип товаров будем продавать?');
// let thirdProductType = prompt('Какой тип товаров будем продавать?');

// let dayBudget = budget/30;

// mainList = {
//     budget: 100,
//     ShopName: shopName,
//     shopGoods: [ firstProductType, secondProductType, thirdProductType],
//     employers: {
//         Security: 'Игорь',
//         Manager: 'Люда'
//     },
//     open: 'yes'
// }

// console.log(mainList.shopGoods);
// console.log(mainList.ShopName);
// alert(dayBudget);


//УСЛОЖНЕННОЕ ЗАДАНИЕ (НЕОБЯЗАТЕЛЬНОЕ)
//Произведение цифр числа
let number = 33721;

function opNumbers(number) {
    if (!number)
        return 0;
    let result = 1;
    while (number) {
        result *= number % 10;
        number = Math.floor(number / 10);
    }
    return result;
}

console.log((opNumbers(number)**3));





