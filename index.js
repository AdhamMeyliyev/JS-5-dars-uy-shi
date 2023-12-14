// //  5-DARS BIRINCHI MASASLA

// let arr = [1, 2, 3, [4, 5, 6, "8"], 9];

// function yigindisiHisobla(arr) {
//   let yigindi = 0;

//   function hisoblash(element) {
//     if (Array.isArray(element)) {
//       // Agar element massiv bo'lsa, unga alohida hisoblash qilamiz
//       element.forEach(hisoblash);
//     } else if (typeof element === "number") {
//       // Agar element raqam bo'lsa, yig'indini qo'shamiz
//       yigindi += element;
//     }
//   }

//   // Barcha massiv elementlarini hisoblash uchun forEach ishlatamiz
//   arr.forEach(hisoblash);

//   return yigindi;
// }

// // Natijani konsolga chiqaramiz
// console.log(yigindisiHisobla(arr));

////////////////////////////////////////////////////////////////////////////////
// let arr = [1, 2, 3, [4, 5, 6, "8"], 9];

// let sum=0;

// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]==='number'){
//         sum+=arr[i];

//     }else{
//         for (let j=0; j<arr[i].length; j++){
//             if(typeof arr[i][j]==='number'){
//                 sum +=arr[i][j];
//             }
//         }
//     }
// }

// console.log(sum);
//////////////////////////////////////////////////////////////////////////////////////
// 5-DARS IKKINCHI MASALA

// function calcOxirgiElementUzunligi(){
//     let arr = [1,2,3, "SomeCode", "salom"];

//     if ( arr.length === 0 || typeof arr [arr.length-1] !=="string"){
//         console.log(null);
//     }

//     let OxirgiElement = arr[arr.length - 1];
     
//     let OxirgiElementUzunligi = OxirgiElement.length;

//     return OxirgiElementUzunligi;
// }

// console.log(calcOxirgiElementUzunligi());
///////////////////////////////////////////////////////////////////////////////////
    // let arr = [1,2,3, "SomeCode", "salom", "abdulla"];

    // let uzunlik;

    // for (let i=0; i< arr.length; i++){

    //     if(typeof arr[i]==='string'){
    //         uzunlik = arr[i].length;
    //     }
    // }
    // console.log(uzunlik);


// 5-DARS UCHINCHI MASALA
// let arr = [1, 2, 3, { Ann: 200, John: 400 }];

// function qiymatlar() {
//   // Agar massiv bo'sh bo'lsa yoki uchta elementdan oshmasa, null qaytaramiz
//   if (arr.length !== 4 || typeof arr[3] !== "object") {
//     return null;
//   }

//   // Obyektning qiymatlarini olish
//   let obyektQiymatlari = Object.values(arr[3]);

//   // Qiymatlar uchun yig'indini hisoblash
//   let yigindi = obyektQiymatlari.reduce((sum, value) => sum + value, 0);

//   return yigindi;
// }

// // Natijani konsolga chiqaramiz
// console.log(qiymatlar());



let arr = [1, 2, 3, { Ann: 200, John: 400 }];

let sum =0;

for(let i=0; i<arr.length; i++){
    if( typeof arr[i] === 'object'){
        for(let key in arr){
            sum += arr[i][key];
        }
    }
}


// console.log(sum);