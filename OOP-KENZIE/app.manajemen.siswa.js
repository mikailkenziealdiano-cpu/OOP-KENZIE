class Siswa {
    constructor(nama,umur,kelas,nilai1,nilai2) {
        this.nama = nama;
        this.umur= umur;
        this.kelas = kelas;
        this.nilai1 = nilai1;
        this.nilai2 = nilai2;;
    }
    tampiilkanData (){
        console.log("===DATA SISWA===");
        console.log("Nama:" + this.nama);
        console.log("kelas: " + this.kelas);
    }
    hitunganRataRata(){
        return(this.nilai1 + this.nilai2) /2;
    }
    cekKelulusan(){
        if (this.hitunganRataRata()>=75){
            return"tidak lulus";
        }else{
            return"tidak lulus"
        }
    }
}
const siswa1 = new Siswa("iqbal","XI PPLG",87,90);
const siswa2 = new Siswa("KENZIE","XI PPLG",88,90);

siswa1.tampiilkanData();
console.log("Rata-rata Nilai:" + siswa1.hitunganRataRata());
console.log("status Kelulusan:" + siswa1.cekKelulusan());

siswa2.tampiilkanData();
console.log("Rata-rata Nilai:" + siswa2.hitunganRataRata());
console.log("status Kelulusan:" + siswa2.cekKelulusan());