//2. Найти все четные и не четные и запушить в соотвествующий массив

let nums = [1,2,3,4,5,6,7,8,9];


let odd = [] // нечентные числа
let even = [] // четные числа

nums.forEach(num => {
    if (num % 2 === 0) {
        even.push(num); 
    } else {
        odd.push(num);
    }
});

console.log(odd);
console.log(even);




// 1. Найти из списка у которых кол-во букв четные
let names = ["Amal", "Konstantin", "Ilya", "Farruh", "Ahmad", "Sherzod"];

let evenLengthNames = names.filter(name => name.length % 2 === 0);

console.log('Имена с четным количеством букв', evenLengthNames);
