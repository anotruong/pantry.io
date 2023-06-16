import './stylesheets/addAlternative.css';
import './stylesheets/formPage.css';

const AddAlternative = () => {
  const testerArr = ['apple', 'pear', 'cheese', 'chowder', 'ginseng', 'flour'];

  const displayOptions = testerArr.map((subArr) => <p>{subArr}</p>)

  return (
    <div className="page-container">
      <div className="page-flex">
        <div className="form-container">
          <form id="ingredients">
            <label className="label">choose an ingredient</label>
            {/* <input className="ingredients" /> */}
            <div className="dropdown">
              <div className="dropdown-btn">choose an ingredient</div>
              <div className="dropdown-content">
                {displayOptions}
              </div>
            </div>
            <label className="label">enter the substitution</label>
            <input className="ingredients" />
            <label className="label">what's the ratio?</label>
            <input className="ingredients" />
            <label className="label">any notes?</label>
            <input 
              className="ingredients" 
              type="textbox"
            />

            {/* <div id="btn-container"> */}
              <button id="submitIngredients">add ingredients</button>
            {/* </div> */}
          </form>
        </div>
      </div>

    </div>
  )
};

export default AddAlternative;