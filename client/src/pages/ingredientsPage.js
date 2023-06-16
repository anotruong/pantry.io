import { useContext } from "react";
import Checkboxes from "../components/checkboxes/catagories";
import { AppContext } from "../hooks/context";
import BakeOrCook from "../components/checkboxes/bakeOrCook";

import './stylesheets/ingredientsPage.css';
import './stylesheets/formPage.css';

const IngredientsPage = () => {
  // const { isDairyFree, isVegetarian, isVegan } = useContext(AppContext);

  return (
    <div className="page-container">
      <div className="page-flex">
        <h3 id="title">pantry.io</h3>
        <p id="subtitle">substitues from your pantry</p>
        <div className="form-container">
          <form id="ingredients">
            <label className="label">new ingredient name</label>
            <input 
              className="ingredients"
              // placeholder="ingredient name"
              label="tester"
            />
            <label className="label">notes</label>
            <input 
              className="ingredients"
              // placeholder="notes"
            />
          </form>
        </div>
        <div className="question-container">
          <p className="question">Is the new ingredient _____ ?</p>
          <Checkboxes />
        </div>

        <div className="question-container">
          <p className="question">Can you ____ with it?</p>
          <BakeOrCook />
        </div>
        <div id="btn-container">
          <button id="submitIngredients">add ingredients</button>
        </div>
      </div>
    </div> 
  )
}

export default IngredientsPage;