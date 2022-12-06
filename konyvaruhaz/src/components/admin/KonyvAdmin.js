
function KonyvAdmin(props){
    function adminOldal(){
        props.adminOldal(props.konyvObj)
    }

    
    function szerk(adat){
        console.log("szerkeszt az konyvadminban")
        props.szerk(props.konyvObj)
    }

    function torol(adat){
        console.log("töröl az konyvadminban")
        props.torol(props.konyvObj.id)
    }

    return (
        
        <tr>
        <td>{props.konyvObj.id}</td>
        <td>{props.konyvObj.szerzo}</td>
        <td>{props.konyvObj.cim}</td>
        <td>{props.konyvObj.ar}</td>
        <td>{props.konyvObj.db}</td>
        <td><button onClick={szerk}>Szerkesztés</button></td>
        <td><button onClick={torol}>Töröl</button></td>
        </tr>
        
    )
}

export default KonyvAdmin;