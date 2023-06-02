import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Chef from '@/assets/svg/Chef';
import admin from '../assets/icons/Eventsliner Admin Dashboard © 2023 All Rights Reserved.png'
import logout from '../assets/icons/Logout.png'
import SideMenu from './SideMenu';


const Sidebar = () => {
    return (
        <div className='pt-[27px] ' >
            <div>
                <div className='flex items-center justify-center mb-[74px]'>
                    <div className='text-center'>
                        <h1 className='font-bold text-[48px] '>Eventsliner
                            <span className='text-baseT'>.</span>
                        </h1>
                        <p className='text-[18px] font-semibold' style={{ color: '#B9BBBD' }}>Modern Admin Dashboard</p>
                    </div>
                </div>
                <SideMenu />
                {/* //add venue  */}
                <div className='mt-[80px] rounded-lg flex justify-center  bg-baseT mx-5' >
                    <div className='flex mx-[28px] my-[19px]'>
                        <div>
                            <p className='text-white text-[12px]'>Please, organize your
                                Venue through button
                                bellow!</p>
                            <Link href='/createnewvenue' className='flex justify-center p-3 mt-2 rounded-lg' style={{ backgroundColor: '#F2F5F3' }}>
                                <button className='text-sm text-gray-500 font-semibold'>+ Add Venue</button>
                            </Link>
                        </div>
                        <div>
                            <Chef />
                        </div>
                    </div>
                </div>
                {/* others  */}
                <div className='mt-[59px]' style={{ color: '#969BA0' }}>
                    <div className='flex justify-center'>
                        <Image src={admin} alt='admin' className='w-[200px]' />
                    </div>
                    <p className='text-[14px] mx-[50px] mt-[15px]'>Made with <span className='text-red-800'>♥</span> by Downpour Consultancy Services</p>
                </div>
                {/* logout */}
                <div className='flex justify-center mt-[96px]'>
                    <Link className='flex gap-2 justify-center p-3 w-[192px] rounded-lg' href='/' style={{ backgroundColor: 'rgba(255, 78, 11, 0.2)' }}>
                        <Image src={logout} alt='logout' />
                        <p className='text-baseT'>Logout</p>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default Sidebar;