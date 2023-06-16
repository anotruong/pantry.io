import './stylesheets/title.css'

function Title (props) {

  // console.log(props)
  return(
    <div id="title-flex" style={props.style}>
      <div id="title-container">
        <h1 id="title" className='props.class'>pantry.io</h1>
      </div>
  </div>
  )
};

export default Title;