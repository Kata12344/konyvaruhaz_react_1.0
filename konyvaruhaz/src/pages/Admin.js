import { useState } from 'react';
import '../App.css';
import KonyvAdmin from '../components/admin/KonyvAdmin';
import KonyvModel from '../model/KonyvModel';

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

function Admin() {
    const [konyvem, setKonyvemm] = useState([]);
    const konyvModel = new KonyvModel(konyvem);
    function adminOldal(adat){
        konyvModel.setKonyvem(adat)
        setKonyvemm(konyvModel.getKonyvem())
    }

    function szerk(adat){
        console.log("szerkeszt az adminban")
        konyvModel.setKonyvem(adat);
        setKonyvemm(konyvModel.getKonyvem())
    }

    function torol(adat){
        console.log("töröl az adminban")
        konyvModel.setKonyvem(adat);
        setKonyvemm(konyvModel.getKonyvem())
    }

  return (
    <>
        <h2>Admin felület</h2>
        <table className='table table-striped'>
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
            konyvTomb.map((elem, index) => {
            return (<KonyvAdmin konyvObj={elem} key={index} szerk = {szerk} torol = {torol} />)
          }
          )
        }
        </tbody>
        </table>
      
    </>
  );
}

export default Admin;
