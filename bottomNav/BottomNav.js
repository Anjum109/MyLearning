'use client';

import React, { createContext, useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiCalendar } from 'react-icons/bi'
import { MdFavorite, MdLocationOn } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa"
import Link from 'next/link';

const Context = createContext();
function NavButton({ active, icon, text, path, onClick }) {
    return (
        <button
            type="button"
            className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${active ? 'text-baseT' : 'text-des'
                }`}
            onClick={onClick}
        >
            <Link
                href={path}
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
                {icon}
                <span style={{ fontSize: '7px', whiteSpace: 'nowrap' }} className="dark:text-gray-400 font-bold">
                    {text}
                </span>
            </Link>
            {active && (
                <hr
                    style={{ borderRadius: '20px 20px 0px 0px', visibility: 'visible' }}
                    className="border-t-2 border-baseT mt-2 mx-auto h-[4px] w-[39px]"
                />
            )}
        </button>
    );
}


const BottomNav = () => {
    const [activeButton, setActiveButton] = useState('home');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        window.scrollTo(0, 0);
    };

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16  bg-white border-t border-gray-200 -700 dark:hover:bg-white">
            <div className="grid  grid-cols-3 h-full max-w-lg mx-auto font-medium bg-white ">
                {/* home button */}
                <NavButton
                    active={activeButton === 'home'}
                    icon={<AiFillHome className="h-[25.22px] w-[25.22px] dark:hover:bg-white bg-white" />}
                    text="Home"
                    path="/"
                    onClick={() => handleButtonClick('home')}
                    className='dark:hover:bg-white bg-white'
                />
                {/* <NavButton
          active={activeButton === 'nearby'}
          icon={<MdLocationOn className="h-[25.22px] w-[25.22px]" />}
          text="Near By"
          path="/nearby"
          onClick={() => handleButtonClick('nearby')}
        /> */}
                {/* decoraton button */}
                {/* <NavButton
          active={activeButton === 'decoration'}
          icon={<FaCalendarAlt className="h-[25.22px] w-[25.22px]" />}
          text="Decoration"
          path="/decoration"
          onClick={() => handleButtonClick('decoration')}
        /> */}
                <NavButton
                    active={activeButton === 'favourite'}
                    icon={<MdFavorite className="h-[25.22px] dark:hover:bg-white w-[25.22px]" />}
                    text="Favourite"
                    path="/favourite"
                    onClick={() => handleButtonClick('favourite')}
                    className='dark:hover:bg-white bg-white'
                />
                <NavButton
                    active={activeButton === 'profile'}
                    icon={<BsFillPersonFill className="h-[25.22px] dark:hover:bg-white w-[25.22px]" />}
                    text="Profile"
                    path="/profile"
                    onClick={() => handleButtonClick('profile')}
                    className='dark:hover:bg-white bg-white'
                />
            </div>
        </div>

    )
}

export default BottomNav
