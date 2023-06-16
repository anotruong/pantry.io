  /*
    Filtering before 'resultsLength' is returned. 
      Would have to use a hook to reiterate through results.

    So onClick, if a checkbox is on, then it should trigger the filter
    so this would be based on useEffect to rerender the list.

    This filter should have it's own module.
  */
import { useContext } from 'react';
import { AppContext } from '../../hooks/context';
import './stylesheets/catagories.css';

const Checkboxes = (props) => {
  const { isDairyFree, setDairyFree } = useContext(AppContext);
  const { isVegetarian, setVegetarian } = useContext(AppContext);
  const { isVegan, setVegan } = useContext(AppContext);

  return (
    <div id='form-container' style={{top: `${props.top}`}}>
      <div id="form-flex">
        <form>
          <input 
            type="checkbox" 
            name="dairyFree" 
            onClick={() => {
              setDairyFree(!isDairyFree)
              console.log(isDairyFree)
            }}
          />
          <label>dairy-free</label>

          <input 
            type="checkbox" 
            name="vegetarian"
            onClick={() => setVegetarian(!isVegetarian)}
          />
          <label>vegetarian</label>

          <input 
            type="checkbox" 
            name="vegan"
            onClick={() => setVegan(!isVegan)}  
          />
          <label>vegan</label>
        </form>
      </div>
    </div>
  )
}

export default Checkboxes;