// 1 chi maslala ================================

let array = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 2 chi maslala ================================

let i = 1;

for (i; i < 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3 chi maslala ================================

function factorial(n) {
  if (n < 0) {
    return "Faktorial faqat musbat butun sonlar uchun hisoblanadi.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

let N = 5;
console.log(`${N}! = ${factorial(N)}`);

//4 chi masala ==============================

function arifmetikProgressiyaYigindi(boshlangich, qadam, n) {
  let yigindi = 0;
  for (let i = 0; i < n; i++) {
    yigindi += boshlangich + i * qadam;
  }
  return yigindi;
}

// Parametrlar
let boshlangich = 2; // Boshlang'ich soni
let qadam = 3; // Har bir soniga qo'shiladigan qiymat
let n = 10; // Jami sonlar soni

let resultFirst = arifmetikProgressiyaYigindi(boshlangich, qadam, n);
console.log(`Yig'indi: ${resultFirst}`);

//5 chi masala ===========================

function takrorlash(matn) {
  let resultSecond = "";
  for (let i = 0; i < matn.length; i++) {
    resultSecond += matn[i].repeat(3);
  }
  return natija;
}

let foydalanuvchiMatni = prompt("Matn kiriting:");
let resultSecond = takrorlash(foydalanuvchiMatni);

console.log(`Natija: ${resultSecond}`);

//6 chi masala ============================

function kvadratlarniChqar() {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} ning kvadrati: ${i * i}`);
  }
}

kvadratlarniChqar();

//7 chi masala ================================

for (let i = 20; i >= 1; i--) {
  console.log(i);
}

//8 chi masala ====================

let numbers = [3, 7, 2, 10, 6];

function engKattaSonniTop(numbers) {
  let engKatta = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > engKatta) {
      engKatta = numbers[i];
    }
  }

  return engKatta;
}

let natija = engKattaSonniTop(numbers);
console.log(`Eng katta son: ${natija}`);

//9 chi masala ================================

let text = "assalamu alaykum";

function harfSanash(matn, harf) {
  let sanash = 0;
  for (let i = 0; i < matn.length; i++) {
    if (matn[i] === harf) {
      sanash++;
    }
  }
  return sanash;
}

let aHarfSoni = harfSanash(text, "a");
console.log(`Matnda "a" harfi: ${aHarfSoni}`);

//10 chi masala =======================================

let num = [10, 20, 30, 40, 50];

function ortachaQiymatHisoblash(num) {
  let yigindi = 0;

  for (let i = 0; i < num.length; i++) {
    yigindi += num[i];
  }

  let ortacha = yigindi / num.length;
  return ortacha;
}

let result = ortachaQiymatHisoblash(num);
console.log(`O'rtacha qiymat: ${result}`);
