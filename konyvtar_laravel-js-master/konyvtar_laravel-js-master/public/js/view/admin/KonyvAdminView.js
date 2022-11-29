import sheet from "../../../css/konyvAdmin.css" assert { type: "css" };

class KonyvAdminView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        // console.log("KonyvView");
        // console.log(elem);
        szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td><label class="lab lElemCim">${elem.cim}</label><input  type="text" value="${elem.cim}"  class="elemCim inp"></td>
        <td><label class="lab lElemSzerzo">${elem.szerzo}</label><input type="text" value="${elem.szerzo}"  class="inp elemSzerzo"></td>
        <td><label class="lab lElemSzerzo">${elem.ar}</label><input type="text" value="${elem.ar}"  class="inp elemAr"></td>

        <td>
        <button   id="szerk${elem.id}" class="szerk btn btn-light">✏️</button>
        <button   id="mod${elem.id}" class="modos btn btn-light">✔️</button>
        <button   id="del${elem.id}" class="torol btn btn-light">❌</button>
        </td>
        </tr>`);
        /* https://emojipedia.org/ */
        this.sorElem = szuloElem.children("tbody").children("tr:last-child");
        //input elemek nevei
        this.labElemek = this.sorElem.children("td").children(".lab");
        this.inpElemek = this.sorElem.children("td").children(".inp");
        this.inpElemek.css("display", "none");

        this.inputCimElem = $(".elemCim:last-child");
        this.inputSzerzoElem = $(".elemSzerzo:last-child");
        this.inputArElem = $(".elemAr:last-child");

        this.labCimElem = $(".lElemCim:last-child");
        this.labSzerzoElem = $(".lElemSzerzo:last-child");
        this.labArElem = $(".lElemSzerzo:last-child");

        this.delElem = $(`#del${elem.id}`);
        this.szerkElem = $(`#szerk${elem.id}`);
        this.modElem = $(`#mod${elem.id}`);
        this.modElem.css("display", "none");
        // console.log(this.modElem);
        this.delElem.on("click", () => {
            this.kattintasTrigger("torol");
            console.log(this.sorElem);
            this.sorElem.remove();
        });
        this.szerkElem.on("click", () => {
            this.inpElemek.css("display", "inline");
            this.labElemek.css("display", "none");
            this.modElem.css("display", "inline");
            this.szerkElem.css("display", "none");
        });
        this.modElem.on("click", () => {
           /*  this.inpElemek.css("display", "none");
            this.labElemek.css("display", "inline");
            this.#elem.cim = this.inputCimElem.val();
            this.#elem.szerzo = this.inputSzerzoElem.val();
            this.#elem.ar = this.inputArElem.val();

            this.labCimElem.text(this.inputArElem.val());
            this.labSzerzoElem.text(this.inputCimElem.val());
            this.labArElem.text(this.inputArElem.val());
            console.log(this.labArElem);
            this.modElem.css("display", "none");
            this.szerkElem.css("display", "inline"); */
            this.#elem.cim="Bármi"
            this.kattintasTrigger("modosit");
        });
    }
    kattintasTrigger(para) {
        const esemeny = new CustomEvent(para, { detail: this.#elem});
        window.dispatchEvent(esemeny);
    }
}
export default KonyvAdminView;
