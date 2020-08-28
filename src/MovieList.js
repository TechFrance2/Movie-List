import React from 'react'



function MovieList(props) {
  const sawItStyle = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: "line-through"
  }
    return(
        <div>
        <p style = {props.item.saw ? sawItStyle: null }>
          <input 
          type='checkbox' 
          checked = {props.item.saw} 
          onChange = {() => props.handleChange(props.item.id)} /> 
          {props.item.text}
        </p>

       
      </div>


    )
}


export default MovieList




