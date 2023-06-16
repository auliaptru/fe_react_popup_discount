import React, { useEffect, useState } from 'react';

import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { FaRegUser, FaRegHeart } from 'react-icons/fa';

import './app.scss';
import Popup from './components/Popup';

const App = () => {
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPopup(true);
        }, 4000);
        return () => clearTimeout(timeout);
    }, []);

    const handleClosePopup = () => {
        setPopup(false);
    };

    return (
        <>
            <div className={`home ${popup ? 'dark' : ''}`}>
                <div className='home__nav'>
                    <h1 className='home__logo'>FASHION</h1>
                    <ul>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Sports</li>
                        <li>Home & Lifestyle</li>
                    </ul>
                    <div className='home__icons'>
                        <FiSearch />
                        <FaRegUser />
                        <FaRegHeart />
                        <FiShoppingCart />
                    </div>
                </div>
                <div className='home__landing'>
                    <div className='newseason'>
                        <span>new season</span>
                        <span>new season</span>
                        <span>new season</span>
                        <span>new season</span>
                        <span>new season</span>
                        <span>new season</span>
                    </div>
                    <div className='landing__page'>
                        <div className='landing__page-imgs'>
                            <div className='vertical__img'>
                                <img
                                    src='https://img.freepik.com/free-photo/young-woman-slow-fashion-clothes_23-2149134022.jpg?w=360&t=st=1685937107~exp=1685937707~hmac=dff83960f5368f92ca3dfae0fb191e33aec21c440433d689024ef786ad1b1bc5'
                                    alt='pict1'
                                />
                            </div>
                            <div className='horizontal__img'>
                                <img
                                    src='https://img.freepik.com/free-photo/fast-fashion-vs-slow-sustainable-fashion_23-2149134026.jpg?w=740&t=st=1685937031~exp=1685937631~hmac=b1c18659859ae2c27bd2e32dec09348c032ac979bef24eeda8538334742f4a7b'
                                    alt='pict2'
                                />
                            </div>
                        </div>
                        <div className='landing__page-texts'>
                            <h1>
                                New <br />
                                Collection
                            </h1>
                            <h3>Fashion</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi doloremque libero
                                facilis? Sapiente dignissimos voluptatum
                                aliquid! Esse nostrum officia optio!
                            </p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
                <span className='season'>season</span>
            </div>
            <div className='home__popup'>
                {popup ? <Popup handleClosePopup={handleClosePopup} /> : null}
            </div>
        </>
    );
};

export default App;
