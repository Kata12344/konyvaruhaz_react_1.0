import './Konyv.css';



function Konyv(props) {
    function kosarKezeles(){
        console.log(props.konyvObj)
        //app.js kosárkezelés hívása
        props.kosarKezeles(props.konyvObj);
    }

  return (
    <div className="konyv" >          
        <h3>{props.konyvObj.szerzo}</h3>
        <p>{props.konyvObj.cim}</p>
        <p>{props.konyvObj.ar}</p> 
        <button onClick={kosarKezeles}>Kosárba</button>    
    </div>
  );
}

export default Konyv;
