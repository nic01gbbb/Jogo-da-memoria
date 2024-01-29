import React, { useCallback, useContext, useEffect, useState } from 'react'
import Appcontext from './create'
import Flip from './flip'
import Wins from './wins'
import Consumer from './consumer'

function Terreo() {
const {input,setinput}=useContext(Appcontext)
const {principal,setprincipal,setinicio,inicio}=useContext(Appcontext)


const submit=(e)=>{
e.preventDefault()
if(input){
if(input.length<4){
alert("mínimo 4 caracteres")
}
else{
setinicio(false)
localStorage.setItem("key",input)
setprincipal(!principal)

}

}
}


 return (
<div className="maxterreo">
<form  
style={{display:principal?"flex":"none"
&& inicio?"flex":"none"
}}
onClick={submit} className='terreo' >
<img className='brain'  src="https://github.com/manualdodev/memory-game/blob/main/images/brain.png?raw=true"/>
<h1>Jogo da memória</h1>
<input value={input} onInput={(e)=>setinput(e.target.value)}
type="text" placeholder='Nome' />
<button style={{background:input.length<4?"#ddd":"#f08080"}}

  >Brincar</button>
</form>


<Flip/>




</div>
  
  )
}

export default Terreo