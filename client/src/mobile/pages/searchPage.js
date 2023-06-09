import { useContext, useState } from "react";
import Searchbar from "../../components/body/searchBar";
import { AppContext } from "../../hooks/context";
import LoginIcon from "../../components/header/loginIcon";
import NaviBtn from "../../components/header/naviBtn";
import Title from "../../components/header/title";
import ResultDisplay from "../../components/body/resultsDisplay";

import './stylesheets/searchPage.css';


const SearchPage = () => {
  const { loginState } = useContext(AppContext); 
  // const [ secondary, setSecondary ] = useState(false);

  /*
    START passing mock-data as an argumennt (object)
    ITERATE through obj
    TRANSFORM key-value pairs and plug them into a button/DIV
    RETURN DIV(s)
  */
  /*
    How to make DIV clickable?
      two lines of DIV.
      the second one is hidden depending if the DIV
        if true then it should show that second div.
   */

/* From PowerTheasrous 
    Looks like that when the div is clicked, a different class is assigned tot he div which changes the layout of the div.
    So I would have to create two divs and have them change depending on the classname assigned.
      ex. <div className="indicates as the opening and closing., takes ingredient name " onClick="stylingSwitchDIV"> id="ingredientname" > 
        terany operator ?
          if the idName is true then show the extra information of divs
          if not then hide all the subdivs?
      </>
      The function handling this would have to be circular.
    The return value should be a tereny operator.

      {!open ? divClosed : divOpen}
    Would the variable 'open' use a global context?
      It should be specific to that div. 

    can I write something like 

    const {'insertVariableName'Open} 

    I would have to pass the key-value pair into a module that takes the key nad puts it in a 

*/

  const testerArr = [
    {
      name: 'apple', 
      baking: true,
      cooking: true,
      dairyFree: true,
      vegatarian: true,
      vegan: true,
      ratio: '1:1',
      notes: 'a mealy fruit with a wet crunchy interior'
    }, 
    {
      name: 'egg',
      baking: true,
      cooking: false,
      dairyFree: true,
      vegatarian: false,
      vegan: false,
      ratio: '1:1',
      notes: 'from chickens'
    },
    {
      name: 'powdered sugar',
      baking: true,
      cooking: true,
      dairyFree: true,
      vegatarian: true,
      vegan: true,
      ratio: '2:1',
      notes: 'I hope this works'
    },
    {
      name: 'milk',
      baking: true,
      cooking: false,
      dairyFree: false,
      vegatarian: false,
      vegan: false,
      ratio: '4:1',
      notes: 'fire alarm'
    }
  ]

  const displayResults = testerArr.map(obj => ResultDisplay(obj));

  const resultLength = testerArr.length;

  /*
    Filtering before 'resultsLength' is returned. */

  return (
    <div id="searchPage-container">
      <div id="search-container">
        <Title style={{top: '13%'}}/>
        {!loginState ? <LoginIcon /> : <NaviBtn /> }
        <Searchbar style={{top: '13%'}} placeholder={'type in an ingredient and hit enter'} />
        <div id='form-container'>
          <div id="form-flex">
            <form>
              <input type="checkbox" name="dairyFree"/>
              <label>dairy-free</label>

              <input type="checkbox" name="vegatarian"/>
              <label>vegatarian</label>

              <input type="checkbox" name="vegan"/>
              <label>vegan</label>
            </form>
          </div>
        </div>
      </div>
      <div id="numOfResults-container">
        <div id="numOfResults">
          <h4>{resultLength} results found</h4>
        </div>
      </div>
      <div id="result-container">
        {/* objects iterated and passed into a function. */}
        {displayResults}
      </div>
    </div>
  )
};

export default SearchPage;