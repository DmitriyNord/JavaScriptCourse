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

const projectName = 'Сайт Магазина';
const price = 2000;
const author = 'Василий Пупкин ';
const template = author + 'заказал' + projectName + ' по цене' + price;
console.log(template);

const template2 = `${author} заказал  ${projectName} по цене  ${price} $`
console.log(template2);

const template3 = 'Проект \n' + 'Цена:' + price  + '$';
console.log(template3);

const template4 = `Проект
Цена: ${price}$`;
console.log(template4);