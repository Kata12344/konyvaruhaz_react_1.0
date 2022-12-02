class KosarModel {
    #kosar = []
    #db
    #osszAr
    constructor(kosaram){
        this.#kosar = kosaram;
        this.#db = 0;
        this.#osszAr = 0;
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
        //console.log(this.#kosar)
        
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
        //console.log(this.#kosar)
        
    }

    setKosarTorol(adat){
        console.log("töröl modellben")
        let azonosElem = this.#kosar.findIndex((elem)=>{
            return elem.id == adat.id;
        });
        if(adat.id == azonosElem){
            this.#kosar.azonosElem.remove();
        }
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

    getKosar(){
        return this.#kosar;
    }

    
}




export default KosarModel;