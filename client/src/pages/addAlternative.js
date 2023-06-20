import IngredientList from '../components/ingredientList';
import './stylesheets/addAlternative.css';
import './stylesheets/formPage.css';

const AddAlternative = () => {


  return (
    <div className="page-container">
      <div className="page-flex">
        <div className="title-container" >
          <h3 id="title">pantry.io</h3>
          <p id="subtitle">substitues from your pantry</p>
        </div>
        <div className="form-container">
          <form id="ingredients">
            <label className="label">choose an ingredient:</label>
            <IngredientList />
            <label className="label">enter the substitution:</label>
            <input className="ingredients" />
            <label className="label">what's the ratio?</label>
            <input className="ingredients" />
            <label className="label">any notes?</label>
            <input 
              className="ingredients" 
              type="textbox"
            />
            <button 
              className="submit-btn" 
              id="addAlternative"
            >
              add alternative
            </button>
          </form>
        </div>
      </div>

    </div>
  )
};

export default AddAlternative;