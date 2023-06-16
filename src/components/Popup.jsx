import React from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';

import './popup.scss';

const Popup = ({ handleClosePopup }) => {
    return (
        <div className='popup'>
            <AiOutlineCloseSquare
                className='closeIcon'
                onClick={handleClosePopup}
            />
            <div className='popup__wrapper'>
                <div className='popup__texts'>
                    <div className='popup__texts-wrapper'>
                        <h3>FIRST TIME HERE?</h3>
                        <h1>Get 15% OFF Now</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Facere ab soluta eveniet nobis fugit aperiam
                            repellat, neque saepe atque unde!
                        </p>
                    </div>
                    <input
                        className='input__email'
                        type='text'
                        placeholder='Enter your email address'
                    />
                    <div className='popup__radio'>
                        <input type='radio' name='women' id='women' />
                        <label htmlFor='women'>Women</label>
                        <input type='radio' name='women' id='women' />
                        <label htmlFor='men'>Men</label>
                    </div>
                    <div className='popup__buttons'>
                        <button className='reject' onClick={handleClosePopup}>
                            NO THANKS
                        </button>
                        <button className='confirm'>GET MY 15% OFF</button>
                    </div>
                </div>
                <div className='popup__img'>
                    <img
                        src='https://img.freepik.com/free-photo/young-woman-slow-fashion-clothes_23-2149134022.jpg?w=360&t=st=1685937107~exp=1685937707~hmac=dff83960f5368f92ca3dfae0fb191e33aec21c440433d689024ef786ad1b1bc5'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default Popup;
