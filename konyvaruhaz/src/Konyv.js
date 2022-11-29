import './Konyv.css';



function Konyv(props) {
    function kosarba(){
        console.log(props.konyvObj)
        props.kosarKezelesFv(props.konyvObj);
    }

  return (
    <div className="konyv" >          
        <h3>{props.konyvObj.szerzo}</h3>
        <p>{props.konyvObj.cim}</p>
        <p>{props.konyvObj.ar}</p> 
        <button onClick={kosarba}>Kosárba</button>    
    </div>
  );
}

export default Konyv;
