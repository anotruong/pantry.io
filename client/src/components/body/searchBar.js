import './stylesheets/searchBar.css';

function Searchbar (props) {
  return (
    <div id="search-flex" style={props.style}>
      <div id="search-bar-container">
        <input 
          type="text"
          id="search-bar" 
          onEnter="will each the info"
          placeholder={props.placeholder}/>
    </div>
  </div>
  )
}

export default Searchbar;