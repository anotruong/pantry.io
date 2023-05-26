import './stylesheets/title.css'

function Title (props) {

  console.log(props)
  return(
    <div id="title-flex">
      <div id="title-container">
        <h1 id="title" class='props.class'>pantry.io</h1>
      </div>
  </div>
  )
};

export default Title;