// let a = 1;
// console.log(a);
// a = 'test';
// console.log(a);
// // Базовые арифметические операторы

// const width = 10;
// const height = 5;
// const space = 10* 5 ; // width* height; - same
// const newWidth = width - 4;
// const newWidth2 = width +4;
// const division = newWidth / newWidth2;
// const volume = 2 ** 3 ; // 2* 2 *2
// console.log(volume);

// //Строки
// const city = 'Москва'
// const street = 'Новослободсккая'
// console.log(city + ', '+ street+ '  '+5);

// //Операторы присваивания
// let age =18+ 5;
// age +=2 // age = age+2
// age -+ 3; // age = age-2
// age *=2; // age = age *2
// age ++ // age = age+1
// age -- // age = age -1
//   console.log(age);
//  //Операторы сравнения
//  const vasia = 20;
//  console.log(age > vasia);
//   console.log(age >= vasia);
//    console.log(age < vasia);
//     console.log(age >= vasia);
//      console.log(age == vasia); //равнаа ли

//      const isSuited = 100-10 > 90 -5 ;
//      console.log(isSuited);


    //  const a = (6 +10 )/ 2;
    //  console.log (a) ;

// const Payperhour = 80 ;
// console.log(Payperhour);
// const DayTime = 5;
// const DaysWeek = 9; 
// const ProjectTime = 40;
// const DaysOff = 11 ;
// const  timeHave = (DayTime * DaysWeek);
// console.log (timeHave);
// console.log (ProjectTime<timeHave)
// console.log (Payperhour*ProjectTime)

// const projectName = 'Сайт Магазина';
// const price = 2000;
// const author = 'Василий Пупкин ';
// const template = author + 'заказал' + projectName + ' по цене' + price;
// console.log(template);

// const template2 = `${author} заказал  ${projectName} по цене  ${price} $`
// console.log(template2);

// const template3 = 'Проект \n' + 'Цена:' + price  + '$';
// console.log(template3);

// const template4 = `Проект
// Цена: ${price}$`;
// console.log(template4);

// const age = '18';
// console.log(Number(age)+5);// 23
// console.log( age-3); // - / * - неявноc
// const userName = 'Вася';
// console.log (Number(userName)+5);
// console.log (typeof NaN);
// console.log(String(4)+7);
// console.log(Boolean(1));

// const a= 2 + '10';
// console.log(a - 10);
// Данные
// //const payRateUSD = 80;
// const projectHours = 40;
// const availableHours = (11-2) * 5 ;
// //Стоимость работ 2 круг 
// console.log('Смогу ли я работать?' +(availableHours>projectHours));
// console.log('Стоимость работ: ' + projectHours *payRateUSD ); 

// console.log ( Boolean(0));
// console.log ( Boolean(''));

// const money = 10; 
// const canBuy = money >50;

// if (canBuy) {
// console.log('может купить наш продукт');
// } else if ( money > 5) {
//     console.log('Куплен mini продукт');
// } 

// else { 
//     console.log('Не хватает баланса');

// }



// console.log('Итог');


// let основная сумма = 10000, ставка = 5, время = 2;  
// let A = основная сумма × (Math.pow((1 + ставка / 100), время));  
// let CI = A − основная сумма;  
// console.log("Сложные проценты равны" + CI); 

// const deposit = 12000;
// const rate = 0.07;
// const depositLength = 24;
// const HouseCost = 13500;

// const res = deposit * (1 + rate / 12) ** 24;

// if(res > HouseCost) {
//     console.log(`Мы накопили: ${res}Можем купить. Остаток ${res - HouseCost}`);
// } else {
//     console.log('Купить не сможем');
// }


// const SecretNumber = 7;

// if(SecretNumber ==7 ) {
//     console.log('Угадал');
// }   

// const role = 'manager'

// if (role === 'manager')  {
// console.log ('Менеджер');
// } else if (role === 'admin') {
//     console.log ('Админ');
// } else if (role === 'ceo') {
//     console.log ('ceo');
// } else {
//     console.log('мы тебя не знаем');
// }

// switch (role) {
//  case 'manager':
//     console.log('Менеджер');
//     break;
//     case 'admin':
//     console.log('Админ');
//     break;
//     case 'ceo':
//     console.log('ceo');
//     break;
//     default:
//         console.log('Мы тебя не знаем');
// }

// const answer = 'Я не робот'
// switch (answer) {
//     case '22':
//         console.log('Успех');
//         break;
//         case '-8':
//             console.log('Успех');
//             break;
//             case 'Я не робот':
//                 console.log('Успех');
//                 break;
//                 default:
//                     console.log('Ты робот');

// }


// const res = prompt('Скольк будет 7 + или -15?');
// switch(true) {
//     case res === 'Я не робот ':
//     case Number(res) === 22:
//     case Number(res) === -8:
//         console.log('Успех');
//         break;
//         default:
//             console.log('Вы робот!');
// }

// const res = prompt('Сколько будет 7+ или -15?');
// if (res ==='Я не робот') {
//     console.log('Успех');
// } else {
//     const resNum = Number(res);
//     switch(resNum) {
//         case 22:
//         case -8:
//             console.log('Успех');
//             break;
//             default:
//                 console.log('Вы робот!');
//     }
// }
// const isAdmin = true;
// const canWrite = true;

// console.log(`Системный файл ${isAdmin && canWrite}`);
// console.log(`Обычный файл ${isAdmin || canWrite}`);
// console.log(`Инвертируем права админа ${!isAdmin}`);

// const isEdited = true;
// const isSuperAdmin = true;

// console.log(`Системный файл с редактированием ${
//     isAdmin && canWrite && (!isEdited || isSuperAdmin)
// }`);

// console.log('Вася' || 'Олег');
// console.log('false' || 'Олег');
// console.log('Вася' || 'false');


// let a;
// const username = a || 'Петя';
// console.log(username);



let username = 'Вася';
console.log(username || 'Default Username');
