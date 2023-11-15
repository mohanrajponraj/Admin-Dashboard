import React from 'react'
/*import './App.css'*/
import Header from './Dashboard/Header'
import Sidebar from './Dashboard/Sidebar'
import {Outlet } from 'react-router-dom';

function Home(){
    return(
      <div className='grid-container'>
         <Header/>   
         <Sidebar/>
         
      <Outlet/>
    
    </div>
      /*<h2>Home components</h2>*/
     
    )
}
export default Home;

