import React, { useState } from 'react';

function SumFunctional () {
    const [inputs, setInputs] = useState({ firstInput: 0, secondInput:0});   //inicializacion y lectura 
    const [result, setResult] = useState(0);           

    function handleChange(e) {
        const {name, value} = e.target;

        const newState = {
            ...inputs,       //con los 3 puntos clono, si yo no los pongo apunto a la variable en memoria 
            [name]: value    //genera un nuevo objeto donde clonas todo el objeto anterior, si no existe la propiedad name, sumala a este objeto pero si ya existe REEMPLAZALA
        }
        console.log(newState)
        setInputs(newState)
    }

    function handleClick() {
        const {firstInput, secondInput} = inputs
        setResult(+firstInput + +secondInput)
    }

    return (
        <>
        <input name="firstInput" type="text" onChange={handleChange}></input>
        <input name="secondInput" type="text" onChange={handleChange}></input>
        <button onClick={handleClick}>Suma</button>
        <p> El resultado es: {result}</p>
        </>
    )
    
}
export default SumFunctional;
