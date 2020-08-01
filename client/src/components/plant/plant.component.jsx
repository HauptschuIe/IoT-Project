import React from 'react';
import plant from '../../assets/Drachenbaum.jpg';
import './plant.styles.scss';

export default function Plant() {

    return (
        <div className='plant'>
            <img src={plant} alt="plant" />
            <div className='font'>Drachenbaum</div>
        </div>
        
    );
}