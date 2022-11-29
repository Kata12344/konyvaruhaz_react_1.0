import KonyvAdminView from "./KonyvAdminView.js";

class KonyvekAdminView {
    constructor(tomb, parent) {
        parent.html(`<table class=" table table-striped"><tr>
                            <th>ID</th>
                            <th>Cim</th>
                            <th>Szerző</th>
                            <th>Ár</th>
                            <th ></th>

                    </tr></table>`);
        this.tabla = parent.children("table:last-child");

        tomb.forEach((konyv) => {
            new KonyvAdminView(konyv, this.tabla);
        });
    }
}
export default KonyvekAdminView;
