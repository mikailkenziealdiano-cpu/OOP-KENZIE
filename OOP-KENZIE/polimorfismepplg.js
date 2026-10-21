class IQBAL {
    skill () {
        console.log("ngoding sambil kayang");
    }
    level () {
        console.log("99999+");
    }
}

class fadli {
    skill() {
        console.log("bisa duduk 24jam tanpa gerak");
    }
    level () {
        console.log("-99999");
    }
}
class kenzie{
    skill() {
        console.log("ngetik pakek kaki");
    }
    level () {
        console.log("67");
    }
}    
const siswa= [new IQBAL(),new fadli(),new kenzie()];
siswa.forEach(siswa => siswa.skill());
siswa.forEach(siswa => siswa.level());