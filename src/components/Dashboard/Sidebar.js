import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillFileEarmarkTextFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonFill, BsFillGearFill } from 'react-icons/bs'
import {Link }from 'react-router-dom'
function Sidebar() {
    return (
        <aside id="sidebar">
            <div className='sidebar-tittle'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon-header' />SHOP
                </div>
                <span className='icon close_icon'> X </span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href ="/home">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <Link to= "/home/document">
                        <BsFillFileEarmarkTextFill className='icon' />Documents
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a href="   ">
                        <BsFillGrid3X3GapFill className='icon' /> Categories</a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="   ">
                        <BsPeopleFill className='icon' /> Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="   ">
                        <BsListCheck className='icon' /> Inventory
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="   ">
                        <BsMenuButtonFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <Link to ="/home/setting">
                        <BsFillGearFill className='icon' /> Settings
                    </Link>
                </li>
            </ul>
        </aside>
    )

}

export default Sidebar