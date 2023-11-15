import React from 'react'
import {BsJustify, BsSearch, BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle} from 'react-icons/bs'

function Header() {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
            <BsSearch classname='icon'/>
        </div>
        <div>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className ='icon'/>
        </div>
    </header>
  )
}

export default Header