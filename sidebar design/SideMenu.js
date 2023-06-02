import React, { useEffect, useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { BiEdit } from 'react-icons/bi'
import { RiMenuUnfoldLine } from 'react-icons/ri'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
import { TbMessageDots } from "react-icons/tb";
import { BiBorderOuter } from "react-icons/bi";
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavButton({ active, icon, text, path, onClick }) {
    return (
        <div className='flex w-full'>
            <div>
                {active && (
                    <hr
                        style={{ borderRadius: '0px 20px 20px 0px', visibility: 'visible', bottom: 0, top: ["7px"], right: 0, position: 'relative', margin: 'auto' }}
                        className="border-r-2 border-baseT ms-2 mx-auto h-[32px] w-[3px] "
                    />
                )}
            </div>
            <button
                type="button"
                className={`inline-flex w-full flex-col items-start justify-start px-5 my-1 py-1 group rounded-lg ${active ? 'text-orange-500 bg-orange-100 mx-2' : 'text-[#464255]'
                    }`}
                onClick={onClick}
            >
                <Link
                    href={path}
                    className="inline-flex gap-5 flex-row items-center justify-center px-5 py-1  group"
                >
                    {icon}
                    <span style={{ fontSize: '18px', whiteSpace: 'nowrap' }} className="  font-medium">
                        {text}
                    </span>
                </Link>

            </button>

        </div>
    );
}


const SideMenu = () => {
    const [activeButton, setActiveButton] = useState('home');
    const location = useRouter();

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        const pathname = location.pathname.substring(1);
        setActiveButton(pathname || 'home');
    }, [location.pathname]);

    return (
        <div className="left-0 z-50 ">
            <div className="grid  grid-rows-3 h-full max-w-lg mx-auto font-medium bg-white ">
                {/* home button */}
                <NavButton
                    active={activeButton === 'home'}
                    icon={<IoHomeOutline className="w-[20px] h-[20px] " />}
                    text="Overview"
                    path="/"
                    onClick={() => handleButtonClick('home')}
                    className=''
                />

                <NavButton
                    active={activeButton === 'venue'}
                    icon={<HiMenuAlt2 className="w-[20px] h-[20px]" />}
                    text="Venue"
                    path="/venue"
                    onClick={() => handleButtonClick('venue')}

                />
                <NavButton
                    active={activeButton === 'customer'}
                    icon={<PeopleOutlinedIcon className="w-[20px] h-[20px]" />}
                    text="Customer"
                    path="/customer"
                    onClick={() => handleButtonClick('customer')}

                />
                <NavButton
                    active={activeButton === 'analytics'}
                    icon={<RiMenuUnfoldLine className="w-[20px] h-[20px]" />}
                    text="Analytics"
                    path="/analytics"
                    onClick={() => handleButtonClick('analytics')}

                />
                <NavButton
                    active={activeButton === 'reviews'}
                    icon={<EditOutlinedIcon className="w-[20px] h-[20px]" />}
                    text="Reviews"
                    path="/reviews"
                    onClick={() => handleButtonClick('reviews')}

                />
                <NavButton
                    active={activeButton === 'rankings'}
                    icon={<BiEdit className="w-[20px] h-[20px]" />}
                    text="Rankings"
                    path="/rankings"
                    onClick={() => handleButtonClick('rankings')}

                />
                <NavButton
                    active={activeButton === 'categories'}
                    icon={<AiOutlineCalendar className="w-[20px] h-[20px]" />}
                    text="Categories"
                    path="/categories"
                    onClick={() => handleButtonClick('categories')}

                />
                <NavButton
                    active={activeButton === 'notification'}
                    icon={<TbMessageDots className="w-[20px] h-[20px]" />}
                    text="Notification"
                    path="/notification"
                    onClick={() => handleButtonClick('notification')}

                />
                <NavButton
                    active={activeButton === 'settings'}
                    icon={<BiBorderOuter className="w-[20px] h-[20px]" />}
                    text="Settings"
                    path="/settings"
                    onClick={() => handleButtonClick('Settings')}

                />
            </div>
        </div>

    )
}

export default SideMenu;
