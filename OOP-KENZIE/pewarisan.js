class hewan {
    bersuara(){
        console.log("suara hewan")
    }
}
class Kucing extends hewan{
    mengeong(){
        console.log("meong");
    }
}
const kucing = new Kucing ();
kucing.bersuara();
kucing.mengeong();