class KosarModel {
    #kosar = []
    #db
    #osszAr
    constructor(kosaram){
        this.#kosar = kosaram;
        this.#db = 0;
        this.#osszAr = 0;
    }

    getKosar(){
        return this.#kosar;
    }

    setKosar(adat){
        let azonosElem = this.#kosar.findIndex((elem)=>{
            return elem.id == adat.id;
        });

        if (azonosElem >= 0) {
            this.#kosar[azonosElem].db++;
        }else{
            this.#kosar.push(adat);
            this.#kosar[this.#kosar.length - 1].db = 1;
        }
        console.log(this.#kosar)
        
    }

    setKosar2(adat){
        let azonosElem = this.#kosar.findIndex((elem)=>{
            return elem.id == adat.id;
        });

        if (azonosElem >= 0) {
            this.#kosar[azonosElem].db--;
        }else{
            this.#kosar.push(adat);
            this.#kosar[this.#kosar.length - 1].db = 1;
        }
        console.log(this.#kosar)
        
    }


    
    getDarabszam(){
        return this.#kosar.length
    }

    getOsszar(){
        let ossz = 0
        this.#kosar.forEach(elem=>{
            ossz += elem.ar
        })
        this.#osszAr = ossz
        return ossz
    }

    
}




export default KosarModel;