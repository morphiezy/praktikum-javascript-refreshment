// Jawaban NO 3 -------------->

const foo = ['Budi', 'Sita', 'Ayu'];
const [a,b,c] = foo;

console.log(a,b,c);

// --------------------------->
        


// Jawaban NO 4 -------------->

let bdays = ['10-17','05-19','20-19'];
let newBdays = bdays.map(day => day.replace('-','/'));

console.log(newBdays);

// --------------------------->



// Jawaban NO 5 -------------->

let value = [1,2,3,4,5,6];
let powerByTwo = value.map(n => n * 2);

console.log(powerByTwo);

// --------------------------->



// Jawaban NO 6 -------------->

let arr = [1.5, 2.56,5.1, 12.33];
let ceilNum = arr.map(n => Math.ceil(n))

console.log(ceilNum);

// --------------------------->