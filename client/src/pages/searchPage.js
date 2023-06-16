import { useContext, useMemo } from "react";
import Searchbar from "../components/searchbar/searchBar";
import { AppContext } from "../hooks/context";
// import LoginIcon from "../../components/header/loginIcon";
// import NaviBtn from "../../components/header/naviBtn";
import Title from "../components/navigation/title";
import ResultDisplay from "../components/searchbar/resultsDisplay";
import Checkboxes from "../components/checkboxes/catagories";

import './stylesheets/searchPage.css';


const SearchPage = () => {
  // const { loginState } = useContext(AppContext); 
  const { isDairyFree, isVegetarian, isVegan } = useContext(AppContext);
  
  const testerArr = useMemo(
    () => [
      {
        name: 'apple',
        baking: true,
        cooking: true,
        dairyFree: true,
        vegetarian: true,
        vegan: true,
        ratio: '1:1',
        notes: 'a mealy fruit with a wet crunchy interior'
      },
      {
        name: 'egg',
        baking: true,
        cooking: false,
        dairyFree: true,
        vegetarian: false,
        vegan: false,
        ratio: '1:1',
        notes: 'from chickens'
      },
      {
        name: 'powdered sugar',
        baking: true,
        cooking: true,
        dairyFree: true,
        vegetarian: true,
        vegan: true,
        ratio: '2:1',
        notes: 'I hope this works'
      },
      {
        name: 'milk',
        baking: true,
        cooking: false,
        dairyFree: false,
        vegetarian: false,
        vegan: false,
        ratio: '4:1',
        notes: 'fire alarm'
      }
    ],
    []
  );

  const filterResults = (arr) => {
    let filteredArr = arr;

    if (isDairyFree) {
      filteredArr = filteredArr.filter(obj => obj.dairyFree);
    }

    if (isVegetarian) {
      filteredArr = filteredArr.filter(obj => obj.vegetarian);
    }

    if (isVegan) {
      filteredArr = filteredArr.filter(obj => obj.vegan);
    }

    return filteredArr;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteredResults = useMemo(() => filterResults(testerArr), [
    testerArr,
    isDairyFree,
    isVegetarian,
    isVegan
  ]);

  const displayResults = filteredResults.map(obj => (
    <ResultDisplay key={obj.name} {...obj} />
  ));

  const resultLength = displayResults.length;

  return (
    <div id="searchPage-container">
      <div id="search-container">
        <Title style={{top: '13%'}}/>
        {/* {!loginState ? <LoginIcon /> : <NaviBtn /> } */}
        <Searchbar style={{top: '13%'}} placeholder={'type in an ingredient and hit enter'} />
        <Checkboxes top="20%"/>
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