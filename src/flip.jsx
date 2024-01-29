import React, { useState } from 'react'
import { useContext } from 'react'
import Appcontext from './create'
import Time from './time'
import { FaHouse } from "react-icons/fa6";


function Flip() {
const {principal,estado,setestado,pontos,setpontos,renderiza,caracteres}=useContext(Appcontext)
const {wins}=useContext(Appcontext)  
const [menssagem,setmenssagem]=useState("")
const{houseenter,inicio,btn}=useContext(Appcontext)




const start=()=>{
const box =[...caracteres,...caracteres]
const sorteio = box.sort(()=>Math.random()-0.5)
setestado(sorteio)
}  


let firstcard=""
let secondcard=""
const check=({target})=>{
if(firstcard===""){
if(firstcard.includes("flipcard")){
return
}
else{
firstcard= target
firstcard.classList.add("flipcard")
}

}

else if(secondcard===""){
if(secondcard.includes("flipcard")){
return;
}
else{secondcard= target
secondcard.classList.add("flipcard")
}

if(firstcard.id===secondcard.id ){
firstcard.firstChild.classList.add("blackwhite")
secondcard.firstChild.classList.add("blackwhite")

setTimeout(()=>{
setpontos(+pontos+1)
},500)

}
 
else{
setTimeout(()=>{
firstcard.classList.remove("flipcard")
secondcard.classList.remove("flipcard")
firstcard=""
secondcard=""
},1000)
}

} 
}

return(
<div className="">
<div style={{display:principal?"none":"flex"
&& wins?"flex":"none"

}}  className="">
<div   className="tudo">   
<Time/>
<button style={{display:estado.length>1?"none":"flex",

}}  className='btn' onClick={start}     >
<img    src="https://fastly.4sqi.net/img/general/600x600/30657135_FlIpSFPAFZBPP_1iae1sbqYkev7g-j0gc_W7PQT1v2U.jpg"  />
</button>
<a>{menssagem}</a>
<div  className='mural' >
<button  
style={{opacity:inicio?"0":"1"}}
onClick={houseenter}  className='house' >
<FaHouse/>
</button>
{estado.map((estados,index)=>(      
<div key={index} id={estados.replace()} onClick={check} className="card face ">
<img     className='img  '  
src={estados}/>
</div>
))} 

</div>
</div>
</div>




</div>










)

}

export default Flip