class kucing {
    bersuara () {
        console.log("kucing besuara");
    }
}
class anjing {
    bersuara() {
        console.log("guk guk ");
    }
}
class hamster {
    bersuara() {
        console.log("kukuk kukuk  ");
    }
}    
const hewan = [new kucing(),new anjing(),new hamster()];
hewan.forEach(hewan => hewan.bersuara());
