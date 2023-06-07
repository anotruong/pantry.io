import React, { useContext, useState } from 'react';
import './stylesheets/resultDisplay.css';

const ResultDisplay = (props) => {
  console.log(props)
  //key value pairs are passed in props and plugged into the divs.

  const [ open, setOpen ] = useState(false);

  const secondDivHandler = () => setOpen(!open)

  const openDiv = <div className='subResults-container'>
    <div className='subResult'>
      <p className='ratio'><b>Ratio:</b> {props.ratio} </p>

    </div>
    <div className='subResult'>
      <p className='notes'><b>Notes:</b> {props.notes}</p>
    </div>
  </div>

  const closeDiv = <div></div>

  return (
    <React.Fragment>  
      <div id={props.name} className='testingResults' onClick={() => {
        setOpen(!open)
      }}>
        <p className='ingredientName'>{props.name}</p>
        <div className='catagory-container'> 
          <p className='catagory'>baking</p>
          <p className='catagory'>cooking</p>
        </div>
      </div>
      {!open ? closeDiv : openDiv}
    </React.Fragment>
  )
};

export default ResultDisplay;