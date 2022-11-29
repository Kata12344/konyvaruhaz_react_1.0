import KonyvPublicView from "./KonyvPublicView.js";
const konyvek = []
class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.html('<article class="row"></article>');
        this.article = szuloElem.children("article");
        tomb.forEach(konyv => {
            konyvek.push(new KonyvPublicView(konyv, this.article));
        });
    }
}

export default KonyvekView;
