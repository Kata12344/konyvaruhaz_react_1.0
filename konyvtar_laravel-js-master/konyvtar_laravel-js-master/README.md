## Konyvek projekthez Backend alap

-   Breeze-zel készített laravel
-   konyvs tábla migráció
-   Konyv modell
-   KonyvController - megvalósítva a CRUD művelethez szükséges metódusok
-   routes: A konyvs tábla módosításához szükséges végpontok

## Feladat

Összekötni az elkészült frontenddel

## A JS fájlok helye

## tokenek használata

### 1.LÉPÉS: A HTML FÁJLOK FEJLÉCÉBE HELYEZD EL A TOKENHEZ TARTOZÓ META TAGET:

``` <meta name="csrf-token" content=<?php $token = csrf_token(); echo $token; ?>```

### 2.LÉPÉS: ABBAN A SCRIPTBEN, AHOL PÉLDÁNYOSÍTOD AZ AJAX HÍVÁSOK OSZTÁLYÁT, HOZZ LÉTRE EGY TOKEN CONSTANST, ÉS EZZEL PÉLDÁNYOSÍTSD AZ AJAX HÍVÁSOK OSZTÁLYÁT.

**const token = $('meta[name="csrf-token"]').attr("content");**
const konyvModel = new KonyvModel(**token**);

### 3.LÉPÉS: A KonyvModel OSZTÁLY KONSTRUKTORA:

class KonyvModel {
constructor(token) { **this.token = token;**  }

### 4.LÉPÉS: A PUT, POST, DELETE METÓDUSOK ESETÉBEN AZ AJAX HÍVÁS FEJLÉCÉBE EL KELL HELYEZNI A TOKENT A HEADERS-BEN:

    adatUj(vegpont, adat) {

        fetch(vegpont, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Új adat "+ data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }

ÉS kész. Ezzel elértük azt, hogy csak a session által generált token birtokában tudjuk módosítani az adatokat.
