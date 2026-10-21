//buat class parent
class pplg {
    constructor(nama,umur,jurusan){
        this.nama = nama;
          this.umur = umur;
    }

perkenalan () {
    console.log("halo nama saya dari 11 pplg,nama saya " + this.nama)
     console.log("umur saya tahun ini  " + this.umur + "tahun")
}
}
//buat class child 
class Siswa extends pplg{
    constructor(nama,umur,kelas){
        super(nama,umur);
        this.kelas = kelas
    }
    belajar (){
        console.log(this.nama + "sedang belajar")
    }
}
//buat objeck baru 
const siswa1 = new Siswa("fadli",16,"11 pplg");
//memangil method yg diwariskan 
siswa1.perkenalan();
//memangilkan method milik clas siswa 
siswa1.belajar();
//menampilkan properti class 
console.log("kelas:"+ siswa1.kelas);

