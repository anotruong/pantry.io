import React, { useState } from 'react';

import './stylesheets/resultDisplay.css';

const ResultDisplay = (props) => {

  // console.log(obj)
  const [ open, setOpen ] = useState(false);

  const openDiv = <div className='subResults-container'>
    <div className='subResult'>
      <p className='ratio'><b>Ratio:</b> {props.ratio} </p>

    </div>
    <div className='subResult'>
      <p className='notes'><b>Notes:</b> {props.notes}</p>
    </div>
  </div>

  const closeDiv = <div></div>;

  return (
    <React.Fragment key={props.name}>  
      <div 
        id={props.name} 
        // obj={props}
        className={`testingResults-${!open ? 'downArrow' : 'upArrow'}`} 
        onClick={() => {
        setOpen(!open)
      }}
      >
        <p className='ingredientName'>{props.name}</p>
        <div className='catagory-container'> 
          <p className={`catagory-${props.baking}`}>baking</p>
          <p className={`catagory-${props.cooking}`}>cooking</p>
        </div>
      </div>
      {!open ? closeDiv : openDiv}
    </React.Fragment>
  )
};

export default ResultDisplay;