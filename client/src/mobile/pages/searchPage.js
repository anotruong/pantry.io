import { useContext } from "react";
import Searchbar from "../../components/body/searchBar";
import { AppContext } from "../../hooks/context";
import LoginIcon from "../../components/header/loginIcon";
import NaviBtn from "../../components/header/naviBtn";
import Title from "../../components/header/title";

import './stylesheets/searchPage.css';


const SearchPage = () => {
  const { loginState } = useContext(AppContext); 

  return (
    <div id="searchPage-container">
      <div id="search-container">
        <Title style={{top: '15%'}}/>
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
    </div>
  )
};

export default SearchPage;