// class SiswaPPLG {
//     constructor(nama, kelas) {
//         this.namaSiswa = nama;
//         this.kelasSiswa = kelas;
//     }
//     perkenalan() {
//         console.log(`Nama:  ${this.namaSiswa}`)
//         console.log(`Kelas:  ${this.kelasSiswa}`)
//     }
//     seragam() {
//         console.log("Menggunakan Seragam Jurusan");
//     }
// };

// const siswa1 = new SiswaPPLG("Ganjar", "XI PPLG");
// siswa1.perkenalan();
// console.log(" ");

// const siswa2 = new SiswaPPLG();
// siswa2.seragam();
// console.log(" ");

// const siswa3 = new SiswaPPLG("kenzie", "XI PPLG");
// siswa3.perkenalan();
// console.log(" ");

class Produk {
    constructor(nama, harga, jumlah) {
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }
    
    tampilkanInfo() {
        console.log("Nama Produk: " + this.nama);
        console.log("Harga Produk: " + this.harga);
        console.log("Jumlah Produk: " + this.jumlah);
    }

    hitungDiskon(persen) {
        return this.harga - (this.harga * persen / 100); 
    }
};

const produk1 = new Produk("Keyboard", 150000, 154);
produk1.tampilkanInfo();
console.log("Harga Produk 1 Setelah Diskon: " + produk1.hitungDiskon(15));

console.log(" ");

const motor = new Produk("Ducati Panigale V2", 2150000000, 2);
motor.tampilkanInfo();
console.log("Harga Motor Setelah Diskon: " + motor.hitungDiskon(2));

console.log(" ");

const mobil = new Produk("Porsche 911 GT3", 8500000000, 1)
mobil.tampilkanInfo();
console.log("Harga Mobil Setelah Diskon: " + mobil.hitungDiskon(1));