/*
    NO 2A : jelaskan kenapa baris 21,22,23 tidak dapat tampil

    JAWABAN : 

    Pada baris ke - 4 terdapat variabel terdaftar memiliki value berupa false ,
    kemudian pada baris ke 21 - 23 terdapat satu blok pengkondisian if-statement
    yang akan dieksekusi jika kondisi tersebut benar.
    Namun pada kode diatas if statement tersebut gagal tereksekusi karena
    kondisi “ terdaftar === true ” me-return false.

*/


/*
    NO 2B : jelaskan kenapa deklarasi pada baris 26 menyebabkan error?

    JAWABAN : 
    
    Karena variabel nama di deklarasikan menggunakan const , yang mana
    hanya bisa dilakukan assignment hanya 1 kali saja pada variabel tersebut ,
    sehingga jika kita melakukan assign ulang seperti di baris 26 pada variabel
    nama , maka akan terjadi error.

*/


/*
    NO 2C : Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat dieksekusi? jelaskan.


    JAWABAN : 
    
    Baris tersebut dapat dieksekusi , namun proses eksekusi pada baris tersebut
    akan terhenti ditengah jalan kemudian pada console akan menampilkan
    pesan error sehingga proses eksekusi akan berhenti di baris tersebut.

    karena pada baris ke - 28 terdapat kode yang melakukan instruksi untuk
    menampilkan variabel asal yang berada di dalam function scope , sementara
    variabel yang dideklarasikan di dalam function scope hanya dapat diakses di
    dalam scope tersebut , oleh karena itu proses eksekusi di baris 28 terhenti
    dan console menampilkan pesan error tersebut

*/



// Jawaban NO 3 [Destructuring] -------------->

const foo = ['Budi', 'Sita', 'Ayu'];
const [a,b,c] = foo;

console.log(a,b,c);

// ------------------------------------------->
        



// Jawaban NO 4 [String Replace] ------------->

let bdays = ['10-17','05-19','20-19'];
let newBdays = bdays.map(day => day.replace('-','/'));

console.log(newBdays);

// ------------------------------------------>




// Jawaban NO 5 [Multiple by Two] ----------->

let value = [1,2,3,4,5,6];
let powerByTwo = value.map(n => n * 2);

console.log(powerByTwo);

// ------------------------------------------>




// Jawaban NO 6 [Math.Ceil] ----------------->

let arr = [1.5, 2.56,5.1, 12.33];
let ceilNum = arr.map(n => Math.ceil(n))

console.log(ceilNum);

// ----------------------------------------->