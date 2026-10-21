class Mobil {
    constructor(merek){
        this.merek= merek;
    }
    nyalakan(){
        console.log("nyalakan mobil");
        this.#prosesMesin();
        console.log("mobil menyala");
    }
    #prosesMesin(){
        console.log("proses mesin");
    }
}
const mobil = new Mobil("toyota");
mobil.nyalakan();
const mobilsport = new Mobil("mercedes");
mobil.nyalakan();
const mobilSUV = new Mobil ("honda"); mobilSUV
mobilSUV.nyalakan();
