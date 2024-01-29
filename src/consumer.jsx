import React, { createElement, useEffect, useState } from 'react'
import propTypes from 'prop-types' 
import Appcontext from './create'


function Consumer({children}) {





 return (
   




<Appcontext.Consumer>

{children}






</Appcontext.Consumer>







)

}







export default Consumer
Consumer.propTypes={
children:propTypes.any,
}.isRequired


