import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        const konyvmodel = new KonyvModel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatok);

        $(window).on("torol", (event) => {
            console.log(event.detail);
        });
    }

    konyvAdatok(tomb) {
        const szuloelem = $("main");
        //console.log(tomb);
        new KonyvekView(tomb, szuloelem);
    }
}

export default KonyvController;
