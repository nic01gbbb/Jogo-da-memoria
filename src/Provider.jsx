import React, { createElement, useEffect, useState } from 'react'
import propTypes from 'prop-types' 
import Appcontext from './create'
import { v4 } from 'uuid'
import Teste from './teste'

function Provider({children}) {
const [principal,setprincipal]=useState(true)
const [estado,setestado]=useState([])
const [pontos,setpontos]=useState(0)
const [wins,setwins]=useState(true) 
const [inicio,setinicio]=useState(false)
const [input,setinput]=useState("")
const [btn,setbtn]=useState("")
const caracteres=[
    "https://github.com/manualdodev/memory-game/blob/main/images/beth.png?raw=true/}", 
    "https://github.com/manualdodev/memory-game/blob/main/images/jerry.png?raw=true",
    "https://github.com/manualdodev/memory-game/blob/main/images/jessica.png?raw=true",
    "https://github.com/manualdodev/memory-game/blob/main/images/scroopy.png?raw=true",
    "https://github.com/manualdodev/memory-game/blob/main/images/rick.png?raw=true",
    "https://github.com/manualdodev/memory-game/blob/main/images/pickle-rick.png?raw=true",
    "https://github.com/manualdodev/memory-game/blob/main/images/pessoa-passaro.png?raw=true",
    "https://github.com/manualdodev/memory-game/blob/main/images/morty.png?raw=true",
    "https://github.com/manualdodev/memory-game/blob/main/images/meeseeks.png?raw=true",
    "https://github.com/manualdodev/memory-game/blob/main/images/summer.png?raw=true"]
      
const houseenter=()=>{
setestado(estado.slice(0,-20))
setinicio(true)

}
const deleção=()=>{
setestado(estado.slice(0,-20))
}
const renderiza=()=>{
if(pontos==1){
deleção()
}

}




const valores={
btn,
setbtn,
input,
setinput,
inicio,
setinicio,
houseenter,
wins,
setwins,
deleção,
caracteres,
renderiza,
setpontos,
pontos,
principal,
setprincipal,
estado,
setestado
}

 






return (
   




<Appcontext.Provider value={valores}>

{children}






</Appcontext.Provider>







)

}







export default Provider
Provider.propTypes={
children:propTypes.any,
}.isRequired















