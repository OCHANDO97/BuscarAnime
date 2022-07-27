import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from '../components/BurgueButtom'
import {  NavLink } from "react-router-dom";

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <ul className={`links ${clicked ? 'active' : ''}`}>
            
        <li> <NavLink to="/"> Home</NavLink> </li>
        <li> <NavLink to="/topAnime"> Top Anime</NavLink> </li>  
        <li><NavLink to="/shingeki">shingeki no kyojin</NavLink></li>
        <li></li>
        <li></li>
  
         
        </ul>
        
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
         
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  background-color: #333;
  display: flex;
  height: 100%;
  width: 100%;
  

 ul {
   list-style-type: none;

 }

 li {
    display: inline;

 }
 
  a{
    color: white;
    text-decoration: none;
    /* letras pequeña */
    margin-right: 1rem;
    font-size:1.5rem;
    width: 100%;
    

  }
  .links{
    position: absolute;
    top: -700px;
    left: -200px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white; 
      display: block;
      
    }
/* pantalla grande */
    @media(min-width: 500px){
      position: initial;
        margin: 1rem  ;

      a{
        font-size: 2em;
        color: white;
        display: inline;
        
        
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute; 
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    
    
    a{
      margin-top: 1rem;
      color: white;

    }

    li {
        position: relative;
        right: 130px;
        bottom:200px ;

    }
  }
  .burguer{
    @media(min-width: 500px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  
  &.active{
    top: 0;
    left: 0;
    width: 60%;
    height: 40%;
  }
`