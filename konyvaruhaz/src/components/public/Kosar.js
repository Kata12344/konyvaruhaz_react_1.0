
function Kosar(props){
    //ha már van az adott elem a kosarában, akkor növeld meg az adott könyv darabszámát
    //ha még nincs akkor pedig a db=1

    // + növeli a darabszámot
    // - csökkenti a darabszámot
    // törlés  törli a kosárból az elemet

    function hozzaad(){
        props.hozzaad(props.kosar)
    }

    function elvesz(){
        props.elvesz(props.kosar)
    }

    return (
        <tr>
        <td>{props.kosar.id}</td>
        <td>{props.kosar.szerzo}</td>
        <td>{props.kosar.cim}</td>
        <td>{props.kosar.ar}</td>
        <td>{props.kosar.db}</td>
        <td><button onClick={hozzaad}>+</button></td>
        <td><button onClick={elvesz}>-</button></td>
        <td><button>Töröl</button></td>
        </tr>
    )
}

export default Kosar;
