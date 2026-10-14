class Rekening {
    // Data Private, Tidak Bisa Diakses Langsung dari Luar Class \\
    #saldo = 0;

    constructor(saldoAwal) {
        this.#saldo = saldoAwal;
    }

    // Method untuk Menambah Saldo \\
    setor(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
        } else {
            console.log("Jumlah setoran harus > 0");
        }
    }

    // Method mengambil uang
    tarik(jumlah) {
        if (jumlah > 0 && jumlah <= this.#saldo) {
            this.#saldo = jumlah;
            console.log("Penarikan Saldo Berhasil!");
        } else {
            console.log("Penarikan Saldo Gagal!");
        }
    }
    lihatSaldo() {
        console.log("Saldo Anda Rp: " + this.#saldo);
    }
};

// Buat Objek Baru \\
const rekeningkenzie = new Rekening(957200000);
rekeningBagas.setor(50000);

// Menggunakan Method yang Kita Buat \\
rekeningkenzie.lihatSaldo();
rekeningkenzie.setor(1217000000);
rekeningkenzie.tarik(500000);
rekeningkenzie.lihatSaldo();