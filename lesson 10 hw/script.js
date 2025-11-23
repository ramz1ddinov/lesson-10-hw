let numbers = [10, 65, 30, 80, 5, 99];

let overFifty = numbers.filter(n => n > 50);
console.log(overFifty);
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

let age = prompt("yoshini kirit ukAm:");

age = Number(age);

if (age < 18) {
    alert("hali yoshbolasan ukAm");
} else if (age <= 60) {
    alert("kOtta bop qoldin ukAm");
} else if (age > 60) {
    alert("chirigansan ukAm");
} else {
    alert("Notogri tevordin ukAm");
}

let nums = [5, -3, 8, 0, -9, 12, -1];

let positive = [];
let negative = [];

for (let i = 0; i < nums.length; i++) {
if (nums[i] > 0) {
    positive.push(nums[i]);
} else if (nums[i] < 0) {
    negative.push(nums[i]);
}
}

console.log("positiv ukAm:", positive);
console.log("negativ ukAm:", negative); 

let arr = [45, 2, 77, 100, 5, 32];

let min = Math.min(...arr);
let max = Math.max(...arr);

console.log("eng kichigi ukAm:", min);
console.log("eng kattasi ukAm:", max); 

let str = prompt("strakani ter ukAm");

str = str.trim();           
let upper = str.toUpperCase(); 
let length = str.length;

console.log("san tergan strakani kottakon versiyasi ukAm:", upper);
console.log("strakani uzunligi ukAm:", length);

if (length > 10) {
    console.log("san uzun straka tervordin ukAm");
} else {
    console.log("san kam straka terdin ukAm");
}

let points = [60, 70, 80, 90, 100];

let summa = 0;

for (let i = 0; i < points.length; i++) {
    summa += points[i];
}

let average = summa / points.length;

console.log(average);

let num = [10, 15, 20, 25, 30, 33, 40];

let even = [];
let odd = [];
let divBy3 = [];

for (let n of num) {
if (n % 2 === 0) {
    even.push(n);
} else {
    odd.push(n);
}

if (n % 3 === 0) {
    divBy3.push(n);
}
}

console.log("chyotniy",even);
console.log("nechyotniy",odd);
console.log("uchga bolinadi ukam",divBy3);

let users = [
    {name: "Ali", age: 17},
    {name: "Laylo", age: 22},
    {name: "Sardor", age: 15},
    {name: "Kamila", age: 30}
];

users.forEach(user => {
    if (user.age > 18) {
        console.log(user.name);
    }
});

let raqamlarBop = [5, 10, 15, 20, 25, 30];


let hammasiJam = 0;
for (let n of raqamlarBop) {
    hammasiJam += n;
}


let ortaChoy = hammasiJam / raqamlarBop.length;


let kattakonlar = [];
for (let n of raqamlarBop) {
if (n > ortaChoy) {
    kattakonlar.push(n);
}
}

let stats = {
    hammasiJam: hammasiJam,
    ortaChoy: ortaChoy,
    kattakonlar: kattakonlar
};

console.table(stats);

let boqqorin = 0;

while (boqqorin <= 0) {
    boqqorin = Number(prompt("nol dan kotta son kirit ukAm:"));
}

console.log("Siz kiritgan son:", boqqorin);


let chichonqi = [];
for (let i = 0; i < 10; i++) {
  chichonqi.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Chichonqi sonlar:", chichonqi);

let juftlar = chichonqi.filter(n => n % 2 === 0);
let toqilar = chichonqi.filter(n => n % 2 !== 0);

let negrvacca = 0;

console.log("Juftlar:", juftlar);
console.log("Toqilar:", toqilar);

let engKichik = Math.min(...chichonqi);
let engKatta = Math.max(...chichonqi);

console.log("Eng kichik:", engKichik);
console.log("Eng katta:", engKatta);

let jami = chichonqi.reduce((acc, n) => acc + n, 0);


console.log("Jami:", jami);
console.log("Ortacha:", orta)

