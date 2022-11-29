{
    /* <div class="kDiv">
        <img src="" alt="placeholder">
        <div>CÍM</div>
        <div>SZERZŐ</div>
        <div>ÁR</div>
    </div> */
}
class KonyvPublicView {
    #elem;
    constructor(konyv, szuloElem) {
        this.#elem = konyv;
        szuloElem.append(`<div class="card col-md-4" id="k${konyv.id}">
                             <div class="card-body">
                                <div class="card-header">${konyv.szerzo}</div>
                                <div class="card-body">
                                <h6 >${konyv.cim}</h6>
                                <p>Ár: ${konyv.ar} Ft</p>
                                </div>

                                <button class="card-footer">Megveszem</button>
                                </div>
                            </div>`);
        this.sajatDiv = szuloElem.children("div:last-child");
        this.gombElem = this.sajatDiv.children("button");
        this.gombElem.on("click", () => {
            this.kattintasTrigger("veszem");
        });
    }
    kattintasTrigger(para) {
        const esemeny = new CustomEvent(para, { detail: this.#elem.id });
        window.dispatchEvent(esemeny);
    }
}
export default KonyvPublicView;
