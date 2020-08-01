import React from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosLeaf } from "react-icons/io";
import './header.styles.scss';

export default function Header() {
      
    return (
      <div className='flex-container'>
       <AiOutlineArrowLeft size="50px" className='arrow' />
        <h1 className='h1'>Die Gießmaschine</h1>
        <IoIosLeaf color="green" size="50px" className='leaf' />
      </div>
    );
  }