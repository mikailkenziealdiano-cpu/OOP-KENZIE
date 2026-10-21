const book = {
    judul: "Romeo & Juliet",
    penulis: "William Shakespeare",
    tahunTerbit: "15XX",

    dibaca: function() {
        this.judul = "Pemrograman OOP";
        console.log("Buku ini dipelajari di mapel kejuruan " + this.judul);
    }
};

const mobil = {
    merk: "Mazda RX7",
    warna: "Orange",
    kecepatan: "0",

    jalan: function() {
        this.kecepatan = 214;
        console.log("Mobil Berjalan: " + this.kecepatan + " km/h");
    }
};

console.log(" ");
book.dibaca();
console.log(" ");
mobil.jalan();
console.log(" ");
































// console.log(" ");

// const siswa = {
//     nama: "Roman de Ketelaire",
//     kelas: "XI PPLG",

//     perkenalan: function() {
//         console.log("Halo, Nama Saya: " + this.nama);
//         console.log("Saya dari Kelas: " + this.kelas);
//     }
// };

// siswa.perkenalan();