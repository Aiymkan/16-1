// let string = prompt('tell me your name!');
// let regExp = /y/i;
// console.log(string.match(regExp));

// const letter = "dkjfeihalHHHHLIHVFhdehfFFFFFkhdkkffff";
// const regExp = /f/gi;
// console.log(letter.match(regExp));

// const letter = "d1kjfei2h3alHH4HHL5IHVFhdehfFFFFF6789khdkkffff";
// const regExp = /\d/g;
// console.log(letter.match(regExp));
// console.log(letter.replace(regExp, "*"));

// const letter = "d1kjfei2h3alHH4HHL5IHVFhdehfFFFFF6789khdkkffff";
// const regExp = /\w/g;
// console.log(letter.match(regExp));
// console.log(letter.replace(regExp, "*"));

// const phoneInput = document.querySelector("#phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");
//
// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;
//
// phoneCheck.addEventListener('click', () => {
//      if (phoneRegExp.test(phoneInput.value)) {
//         phoneResult.innerText = "right";
//         phoneResult.style.color = "green";
//     } else {
//          phoneResult.innerText = "error";
//          phoneResult.style.color = "red";
//      }
// });

// let num = 0;
// const count = () => {
//     num++;
//     console.log(num)
//     if (num < 150) {
//         count()
//     }
// };
// count();

// const people = {
//     John: {
//         age: 25,
//         parents: {
//             Tony: {
//                 age: 50,
//             },
//             Kelly: {
//                 age: 45,
//                 parents: {
//                     Emmy: {
//                         age: 65,
//                     },
//                 },
//             },
//         },
//     },
//     Sam: {
//         age: 15,
//         parents: {
//             Jeane: {
//                 age: 35,
//                 parents: {
//                     Kaun: {
//                         age: 55,
//                         parents: {
//                             Gaul: {
//                                 age: 75,
//                             },
//                         },
//                     },
//                 },
//             },
//         },
//     },
//     Din: {
//         age: 25,
//     },
// };
//
// const parentsList = (obj) => {
//     if (obj.parents) {
//         for (let key in obj.parents) {
//             console.log(key);
//             parentsList(obj.parents[key]);
//         }
//     } else {
//         console.log("oops");
//     }
// };
//
// for (let key in people) {
//     parentsList(people[key]);
// }

//
// const numberInput = document.querySelector("#numberInput");
// const numberCheck = document.querySelector(".numberCheck");
// const numberResult = document.querySelector('.numberResult');
//
// const numberRegExp = /^\d{14}$/;
//
// numberCheck.addEventListener('click', () => {
//     if (numberRegExp.test (numberInput.value)) {
//         numberResult.innerText = "right";
//         numberResult.style.color = "green";
//     } else {
//         numberResult.innerText = "error";
//         numberResult.style.color =" red";
//     }
// })







