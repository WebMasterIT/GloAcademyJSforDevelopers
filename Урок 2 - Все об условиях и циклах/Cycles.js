// let num = 50;

// if (num< 49) {
//     console.log('Неверно');
// } else if (num>100){
//     console.log('Неверно');
// } else {
//     console.log('Верно');
// }

//тернарный оператор
// (num == 50) ? console.log('Верно!') : console.log('Неверно');

//switch

// switch (num) {
//     case 49:
//         console.log('Мало');
//         break;
//     case 100:
//         console.log('Много');
//         break;
//     case 80:
//         console.log('Все еще много!');
//     case 50:
//         console.log('В точку');
//     default:
//         console.log('Не в этот раз');
//         break;
// }

//Циклы
//While

// while (num<55) {
//     console.log(num);
//     num++;
// }

// do while

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55)

//for

// for (let i = 0; i < 8; i++) {
//     console.log(i);
// }






// ДЗ 

let money = prompt('Ваш бюджет?');
let shopName = prompt('Название вашего магазина?');
let time = 19;

mainList = {
    budget: money,
    ShopName: shopName,
    shopGoods: [],
    employers: {},
    open: false
}

//Цикл для добавления большого количества товаров
// for (let i = 0; i < 5; i ++) {
//     let a = prompt("Какой тип товаров будем продавать?");
    
//     if ((typeof (a)) === 'string' && (typeof (a)) === null && a != '' && a.length < 50) {
//         mainList.shopGoods[i] = a;
//     } else {
//         mainList.shopGoods[i] = a;
//     }
// }

let i = 0;

do {
    
    let a = prompt("Какой тип товаров будем продавать?");
    if ((typeof (a)) === 'string' && (typeof (a)) === null && a != '' && a.length < 50) {
    mainList.shopGoods[i] = a;
} else {
    mainList.shopGoods[i] = a;
}
    i++;
}

while (i < 3) 

if (time < 0) {
    console.log('Такого не может быть');
} else if (time > 0 && time < 20) {
    console.log('Время работать');
} else if (time < 24) {
    console.log('Уже слишком поздно!')
} else {
    console.log('В сутках только 24 часа!')
}




// mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
// mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
// mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

alert(mainList.budget/100);

console.log(mainList);



