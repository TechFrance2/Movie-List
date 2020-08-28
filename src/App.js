/* Let's make it so our checkbox can actually mark our movie list as seen or not seen
Challenge: 
1. Create an event handler in the App component for when the checkbox is cliked (which is an onChange event)
  a. This method will be the trickiest part. Check the comments in the stubbed out method below for some pseudocode
  to help guide you through this part
  2. Pass the method down to the MovieList component
  3. In the MovieList component, make it so when the 'onChange' even happens, it calls the 'handleChange' method and passes 
  the id of the todo into the function */


import React from 'react';
import MovieList from './MovieList'
import moviedata from './moviedata'
import Header from './Header'
import './style.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: moviedata
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    
    //update state so that the item with the given id flips 'complete' from false to true (or vice versa)
    //Remember not to modify prevState directly, but instead to return a new version of state with 
    // the change you want included in that update. (think how you might use the '.map' method to do this)
   this.setState(prevState => {
     const updatedMovieList = prevState.movies.map(movie => {
       if(movie.id === id) {
         movie.saw = !movie.saw
       }
       return movie
     })
     return {
       movies: updatedMovieList
     }
   })
  }
  render() {
    const movieItems = this.state.movies.map(item => <MovieList key = {item.id} item = {item} 
    handleChange = {this.handleChange}/>) 
    return(
      <div className= "movielist">
        <Header />
         {movieItems} 
      
      </div>
    )
  }
}

export default App; 
 