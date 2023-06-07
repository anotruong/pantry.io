import './stylesheets/searchBar.css';

function Searchbar (props) {
  return (
    <div id="search-flex" style={props.style}>
      <div id="searchBar-container">
        <input 
          type="text"
          id="searchBar" 
          onEnter="will each the info"
          placeholder={props.placeholder}/>
    </div>
  </div>
  )
}

export default Searchbar;