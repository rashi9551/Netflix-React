import React from 'react'
import './App.css'
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {original,action,horror,romance, comedy } from './url';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Originals' url={original}/>
      <RowPost title='Action' isSmall url={action}/>
      <RowPost title='Horror' isSmall url={horror}/>
      <RowPost title='Romance' isSmall url={romance}/>
      <RowPost title='Comedy' isSmall url={comedy}/>


    </div>
  );
}

export default App;