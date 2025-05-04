// 'use strict'

// //////////////////////////////////////////// 1 chi masala

// let cup1 = "cocola";
// let cup2 = "fanta";
// let cup3 = cup2;

// cup2 = cup1;
// cup1 = cup3;

// console.log(cup1);
// console.log(cup2);

//////////////////////////////////////////////// 2 chi masala

// const obj = {
//     a: 4,
//     b: 2
// };
// const {a, b} = obj

// if (a > b) {
//     console.log(`${a} a soni kata`);
// } else if (b > a) {
//     console.log(`${b} b soni kataroq`);
// } else {
//     console.log("ikala son teng");
// }

/////////////////////////////////////////////////////// 3 chi masala

// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} juft son`);
//     } else {
//         console.log(`${i} son toq son`);
//     }
// }

/////////////////////////////////////////////////////////////////// 4 chi masala

// const array = [
//   { title: "Naruto", genre: "Action", rating: 8.5 },
//   { title: "One Piece", genre: "Adventure", rating: 9.0 },
//   { title: "Death Note", genre: "Mystery", rating: 9.2 },
//   { title: "Death Note", genre: "Mystery", rating: 10 },
//   { title: "Death Note", genre: "Mystery", rating: 12 },

// ];
// let max = array[1];

// for (let i = 0; i < array.length; i++) {
//     if (max.rating < array[i].rating) {
//         max = array[i]
//     }
// }

// console.log(max);

/////////////////////////////////////////////////////////// 4 chi masala ikinchi yol

// for (let i = 0; i < array.length-1; i++) {
//     if (array[i].rating > 9.0) {
//         console.log(array[i].rating);
//     }
// }


/////////////////////////////////////////////////////////////////////// 5 chi masala

// const students = [
//   {
//     name: "Alice",
//     age: 20,
//     grade: 75,
//     major: "Computer Science",
//   },
//   {
//     name: "Bob",
//     age: 22,
//     grade: 82,
//     major: "Mechanical Engineering",
//   },
//   {
//     name: "Charlie",
//     age: 19,
//     grade: 90,
//     major: "Mathematics",
//   },
//   {
//     name: "Diana",
//     age: 21,
//     grade: 88,
//     major: "Biology",
//   },
//   {
//     name: "Ethan",
//     age: 23,
//     grade: 70,
//     major: "History",
//   },
  
// ];

// for (let i = 0; i < students.length; i++) {
//     const { name, grade, major } = students[i];
  
//     if (grade <= 75) {
//       console.log(`${name} ${grade} F ${major}`);
//     } else if (grade <= 80) {
//       console.log(`${name} ${grade} C ${major}`);
//     } else if (grade <= 89) {
//       console.log(`${name} ${grade} B ${major}`);
//     } else if (grade <= 90) {
//       console.log(`${name} ${grade} A ${major}`);
//     } else {
//       console.log(`${name} ${grade} A+ ${major}`); // Дополнительно: для оценок выше 90
//     }
//   }
  

//**************************************** */ UYGI VAZIFA ***************************************************

// for (let i = 0; i <= 20; i++) {

//     for (let tub = 0; tub < i; tub++) {
//         if (tub % i === 0) {
//             console.log(tub);
            
//         }
//     }
// }


for (let num = 2; num <= 20; num++) {
    let isTub = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isTub = false;
            break;
        }
    }
    if (isTub) {
        console.log(num);
    }
}


// 'use strict'

// //////////////////////////////////////////// 1 chi masala

// let cup1 = "cocola";
// let cup2 = "fanta";
// let cup3 = cup2;

// cup2 = cup1;
// cup1 = cup3;

// console.log(cup1);
// console.log(cup2);

//////////////////////////////////////////////// 2 chi masala

// const obj = {
//     a: 4,
//     b: 2
// };
// const {a, b} = obj

// if (a > b) {
//     console.log(`${a} a soni kata`);
// } else if (b > a) {
//     console.log(`${b} b soni kataroq`);
// } else {
//     console.log("ikala son teng");
// }

/////////////////////////////////////////////////////// 3 chi masala

// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} juft son`);
//     } else {
//         console.log(`${i} son toq son`);
//     }
// }

/////////////////////////////////////////////////////////////////// 4 chi masala

// const array = [
//   { title: "Naruto", genre: "Action", rating: 8.5 },
//   { title: "One Piece", genre: "Adventure", rating: 9.0 },
//   { title: "Death Note", genre: "Mystery", rating: 9.2 },
//   { title: "Death Note", genre: "Mystery", rating: 10 },
//   { title: "Death Note", genre: "Mystery", rating: 12 },

// ];
// let max = array[1];

// for (let i = 0; i < array.length; i++) {
//     if (max.rating < array[i].rating) {
//         max = array[i]
//     }
// }

// console.log(max);

/////////////////////////////////////////////////////////// 4 chi masala ikinchi yol

// for (let i = 0; i < array.length-1; i++) {
//     if (array[i].rating > 9.0) {
//         console.log(array[i].rating);
//     }
// }


/////////////////////////////////////////////////////////////////////// 5 chi masala

// const students = [
//   {
//     name: "Alice",
//     age: 20,
//     grade: 75,
//     major: "Computer Science",
//   },
//   {
//     name: "Bob",
//     age: 22,
//     grade: 82,
//     major: "Mechanical Engineering",
//   },
//   {
//     name: "Charlie",
//     age: 19,
//     grade: 90,
//     major: "Mathematics",
//   },
//   {
//     name: "Diana",
//     age: 21,
//     grade: 88,
//     major: "Biology",
//   },
//   {
//     name: "Ethan",
//     age: 23,
//     grade: 70,
//     major: "History",
//   },
  
// ];

// for (let i = 0; i < students.length; i++) {
//     const { name, grade, major } = students[i];
  
//     if (grade <= 75) {
//       console.log(`${name} ${grade} F ${major}`);
//     } else if (grade <= 80) {
//       console.log(`${name} ${grade} C ${major}`);
//     } else if (grade <= 89) {
//       console.log(`${name} ${grade} B ${major}`);
//     } else if (grade <= 90) {
//       console.log(`${name} ${grade} A ${major}`);
//     } else {
//       console.log(`${name} ${grade} A+ ${major}`); // Дополнительно: для оценок выше 90
//     }
//   }
  

//**************************************** */ UYGI VAZIFA ***************************************************
// for (let num = 2; num <= 20; num++) {
//     let isTub = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isTub = false;
//             break;
//         }
//     }
//     if (isTub) {
//         console.log(num);
//     }
// }


