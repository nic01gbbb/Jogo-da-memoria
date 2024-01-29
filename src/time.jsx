import React, { useContext, useEffect, useState } from 'react'
import Appcontext from './create'
function Time() {

const {pontos,setpontos}=useContext(Appcontext)
const {estado,setestado,deleção}=useContext(Appcontext)
const [menssagem,setmenssagem]=useState("")
const [segundos,setsegundos]=useState("00")
const [minutos,setminutos]=useState("00")
const [horas,sethoras]=useState("00")

useEffect(()=>{
if(estado.length<1){
clearInterval(loop)
setminutos("00")
setsegundos("00")
}
},[minutos,segundos])
useEffect(()=>{
if(estado.length>1){
setmenssagem("")
}
},[estado])



const troca=(n)=>{
if(n<10){
return "0"+n
}
else{
return n
}}

let loop
const aplica=()=>{
clearInterval(loop)
if(estado.length>1){
loop=setInterval(() => {
setsegundos(troca(+segundos+1))
if(segundos==59){
setsegundos("00")
setminutos(troca(+minutos+1))
}
else if(minutos===59){
setminutos("")
setsegundos("")
sethoras(troca(+horas+1))
}
clearInterval(loop)
},900);
}
}  
useEffect(()=>{
aplica()
if(pontos==10){
setTimeout(()=>{
deleção()
setminutos("00")
setsegundos("00")
setpontos(0)
},1000)    
if(minutos<1){
clearInterval(loop)
setTimeout(()=>{
setmenssagem("Parabéns você conseguiu com " + minutos + " minutos e " + segundos + " segundos,tempo excelente!")

},1000)
} 

else if(minutos<2){
clearInterval(loop)
setTimeout(()=>{
setmenssagem("Parabéns você conseguiu com " + minutos + " minuto e " + segundos + " segundos,tempo bom!")
},1000)

}
else if(minutos<3){
clearInterval(loop)
setTimeout(()=>{
setmenssagem("Parabéns você conseguiu com " + minutos + " minutos e " + segundos + " segundos,tempo regular!")
},1000)
}
else if(minutos<4){
clearInterval(loop)
setTimeout(()=>{
setmenssagem("Parabéns você conseguiu com " + minutos + " minutos e " + segundos + " segundos,tempo ruim!")
},1000)
}
}
else{
if(minutos==4){
clearInterval(loop)
setTimeout(()=>{
setmenssagem("Game over seu tempo acabou!")
deleção()
setminutos("00")
setsegundos("00")
setpontos(0)
},1000)
}
}
},)

 

return (

<div >
<header style={{display:estado.length>1?"flex":"none",}} >
<span>{localStorage.getItem("key")}</span>
<div className="span">
<span className='tempo' >Tempo:<span className='tempop' >{horas+":"+minutos+":"+segundos}</span></span>
</div>
</header>
<a style={{opacity:menssagem?"1":"0"}} className='menssagem' >{menssagem}</a>
</div> 


  

 )

}

export default Time
