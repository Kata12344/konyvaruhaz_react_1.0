Könyvek adatainak megjelenítése a HTML oldalon.
Táblázatban

Könyváruház

Admin oldal:
- listázni a könyveket
- új könyv felvitele
- könyv adatainak módosítása, törlése

Vásárlói oldal:
- listázni
- kosárba rakni
Div-ekben

Felépítés:
    MODEL
        mi reprezentálja a program állapotát? - tömbbe/objektumok - KONYV tábla tárolja az aktuálisan kezelendő könyveket
        fetch - modellbe kerül
        innen indítjuk az asszinkron hívásokat
        vissza kell adnia a tömböt

    CONTROLLER
        adatokat a megfelelő helyre irányítja
        összeköti a modelt és a view-t
        példányosítja a modelt és a view-t
        reagál a view kérésére - pl.: törlésre, módosításra, új adat felvitelére

    VIEW
        oldal megjelenítése
        konyvAdminView - egy könyv adatai (táblázat egyetlen sora)
        konyvekAdminView - az összes könyv adatait megjeleníti (táblázat létrehozása a fejléccel)