import React, { useContext } from 'react'
import Appcontext from './create'

function Wins({segundos}) {
const {wins,setwins}=useContext(Appcontext)

return (
<div style={{display:"flex"}}  className='wins' >
<img className='imgwin'  src="data:image/png;base64,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"/>
<p className='frasewins' >Parabéns você conseguiu com  {segundos} segundos,tempo excelente!</p>

</div>
)
}

export default Wins









