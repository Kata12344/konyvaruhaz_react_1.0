class KonyvModel{
    #konyvem = []
    #db
    constructor(konyvem){
        this.#konyvem = konyvem;
        this.#db = 0;
    }
    
    getKonyvem(){
        return this.#konyvem;
    }

    setKonyvem(adat){
        //splice!!!
        let azonosElem = this.#konyvem.findIndex((elem)=>{
            return elem.id == adat.id;
        })
        if (azonosElem >= 0) {
            this.#konyvem[azonosElem].db++;
        }else{
            this.#konyvem.push(adat);
            this.#konyvem[this.#konyvem.length - 1].db = 1;
        }
        console.log(this.#konyvem)
    }



    
}

export default KonyvModel;