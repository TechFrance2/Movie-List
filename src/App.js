import React from 'react';
import MovieList from './MovieList'
import Header from './Header'
import './style.css';


function App() {
  return(
    <div className= "movielist">
      <Header />
      <MovieList />
    
    </div>
  )
}

export default App;
