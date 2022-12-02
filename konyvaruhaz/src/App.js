import './App.css';
import Konyv from './Konyv';
import {useState} from "react";
import Kosar from './Kosar';
import KosarModel from './model/kosarModel';

const konyvTomb = [
  {
    id: 1,
    cim: "Malevil",
    szerzo: "Robert Merle",
    ar: 2111
  },
  {
    id: 2,
    cim: "Védett férfiak",
    szerzo: "Robert Merle",
    ar: 1111
  },
  {
    id: 3,
    cim: "Állati elmék",
    szerzo: "Robert Merle",
    ar: 3111
  },
]

function App() {
  //state - reprezentálják az oldal állapotát és befrissítik az oldalra vonatkozó részét
  //useState - úgymond default értéket ad a zárójelen
  const [db, setDb] = useState(0);
  const [osszAr, setOsszAr] = useState(0);
  const [kosaram, setKosaram] = useState([]);
  //KosarModell osztály példányosítása
  const kosarModel = new KosarModel(kosaram);
  function kosarKezeles(adat) {
    kosarModel.setKosar(adat)
    setKosaram(kosarModel.getKosar())
    //Számoljuk meg hány könyvet tettünk a kosárba
    setDb(kosarModel.getDarabszam());
    //összár
    setOsszAr (kosarModel.getOsszar());
    //console.log(kosaram)

    //console.log(db)
    
    
  }
function hozzaad(adat){
  console.log(adat)
      kosarModel.setKosar(adat);
      setKosaram(kosarModel.getKosar())
    }

function elvesz(adat){
  console.log(adat)
      kosarModel.setKosar2(adat);
      setKosaram(kosarModel.getKosar())
    }

    function torol(adat){
      console.log("töröl appban")
      kosarModel.setKosarTorol(adat);
      setKosaram(kosarModel.getKosar());
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <section>
        <p>A könyvek darabszáma: {db}</p>
        <p>A könyvek ára: {osszAr}</p>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Szerzők</th>
            <th>Cím</th>
            <th>Ár</th>
            <th>Db</th>
          </tr>
        </thead>
        <tbody>
        {
          kosaram.map((elem, index) => {
            return (<Kosar kosar={elem} key={index} hozzaad = {hozzaad} elvesz = {elvesz}  torol = {torol} />)
          }
          )
        }
        </tbody>
        </table>
      </section>
      <article>
        {
          konyvTomb.map((konyv, index) => {
            return (<Konyv konyvObj={konyv} key={index} kosarKezeles={kosarKezeles} />)
          }
          )
        }


      </article>
      <footer>
        <p>saját név</p>
      </footer>
    </div>
  );
}

export default App;
