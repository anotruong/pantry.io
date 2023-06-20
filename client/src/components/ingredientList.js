import { useState } from 'react';
import './ingredientsList.css';

const IngredientList = () => {
  const [ selectedItem, setSelectedItem ] = useState(null);
  const [ itemId, setItemId ] = useState(null);

  const testerArr = [
    {name: 'apple', id: '01'}, {name: 'pear', id: '02'}, 
    {name: 'cheese', id: '03'}, {name: 'chowder', id: '04'}, 
    {name: 'ginseng', id: '05'}, {name: 'flour', id: '06'}, 
    {name: 'shirt', id: '07'}, {name: 'maple syrup', id: '08'}, 
    {name: 'jicama', id: '09'}, {name:'watermelon', id: '10'}, 
    {name: 'banana', id: '11'}, {name: 'egg whites', id: '12'}, 
    {name: 'tortilla chips', id: '13'}, {name: 'panko crumbs', id: '14'},
    {name: 'bread', id: '15'}, {name: 'jasmine rice',  id: '16'}, 
    {name: 'sourdough bread', id: '17'}, {name: 'nerds rope', id: '18'}, 
    {name:'lemon', id: '19'}, {name: 'lime', id: '20'}
  ];

  const displayOptions = testerArr.map((obj) => <div
    href='?' 
    className="item" 
    label={obj.name} 
    id={obj.id} 
    onClick={() => {
      setSelectedItem(obj.name);
      setItemId(obj.id);
    }} > 
      {obj.name}
      <br/>
    </div>
  );

  return(
    <div id="dropdown-container">
    <div className="dropdown">
      <div className="dropdown-btn" id={itemId}>{selectedItem || "choose an ingredient"}</div>
      <div className="dropdown-content">
        {displayOptions}
      </div>
    </div>
  </div>
  )
};

export default IngredientList;