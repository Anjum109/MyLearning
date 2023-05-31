import Layout from '@/components/Layout';
import Image from 'next/image';
import React, { useState } from 'react';
import search from '../../../assets/icons/search.png'
import TopNav from '@/components/TopNav';
import Link from 'next/link';
import { BiArrowBack } from "react-icons/bi";
import TeamTable from '@/components/TeamTable';
import DrawerItemsForAddUser from '@/components/DrawerItemsForAddUser.js/DrawerItemsForAddUser';



export default function theTeam() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };


    return (
        <Layout>
            <div className='flex p-4 flex-col-reverse lg:flex-row gap-2 mt-[41px] items-center lg:justify-between w-full'>
                <div className=' lg:block w-full mt-5 lg:mt-0 lg:w-[50%] '>
                    <div className='flex justify-between items-center bg-white px-[16px] w-full rounded-lg py-3'>
                        <input type="text" placeholder='Search Here' className='bg-white outline-none w-full' />
                        <div className='w-[23px] h-[24px] ' >
                            <Image src={search} />
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] w-full'>
                    <TopNav />
                </div>
            </div>
            {/* the team  */}
            <div className='bg-white font-[Inter]'>
                <div className='mt-12   p-4'>
                    <Link href='/settings' className='text-[#9CA3AF] '>
                        <BiArrowBack />
                    </Link> </div>
                <div className='  pb-[15px]'>
                    <hr className='text-[#E5E7EB]' />
                </div>
                <div className='max-w-screen-lg mx-auto'>
                    <div className='flex justify-between items-center '>
                        <h1 className='font-semibold text-20px'>The Team</h1>
                        <div className='flex justify-end'>
                            {/* drawer  */}
                            <div className={`drawer drawer-end ${isDrawerOpen ? 'open' : ''}`}>
                                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content flex gap-3 items-center ">
                                    <label htmlFor="my-drawer-4" className="ms-5 text-[13px] font-medium border p-[5px] rounded-lg drawer-button custom-menu-button hover:bg-gray-100" onClick={handleDrawerToggle}>
                                        Add New User
                                    </label>
                                    <div className="flex gap-2 items-center border rounded-lg p-[5px]">
                                        <Image src={search} className="w-[12px] h-[12px]" alt="search" />
                                        <input type="text" placeholder="Find Something" className="text-[13px] font-normal text-[#9CA3AF] outline-none bg-white" />
                                    </div>
                                </div>

                                {/* drawer content  */}
                                <div className={`drawer-side border rounded-xl ${isDrawerOpen ? 'open mt-[50px] lg:mt-[156px] ' : ''}`}>
                                    <label htmlFor="my-drawer-4" className="drawer-overlay" onClick={handleDrawerToggle}></label>
                                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                                        {/* <!-- Sidebar content here --> */}

                                    </ul>
                                    <div className="drawer-close-button">
                                        <div className='flex justify-between mt-[34px] mx-[24px]'>
                                            <div className='font-semibold text-[20px]'>Add User</div>
                                            <button className="text-[13px] w-[31px] h-[11] text-[#6B7280] font-medium border p-[5px] rounded-lg drawer-button custom-menu-button" onClick={handleDrawerClose}>
                                                x
                                            </button>
                                        </div>
                                        <hr className='my-3' />
                                        {/* collapse  */}
                                        <DrawerItemsForAddUser />
                                        {/* collapse  */}
                                    </div>
                                </div>
                            </div>

                            {/* drawer  */}

                        </div>
                    </div>
                    <hr className='my-5' />
                    <div>
                        <TeamTable />
                    </div>
                    <div>
                        <div className='flex justify-between mt-[50px]'>
                            <div className='flex items-center text-[#6B7280] font-medium text-[12px] gap-1 font-[Barlow]'>
                                <p>1</p>
                                <hr className='w-4 h-[2px]' />
                                <p>13 of 200 results</p>
                            </div>
                            <div className='flex items-center gap-2 mb-5'>
                                <p className='text-[#6B7280] font-medium text-[12px] font-[Inter]'>1 of 16</p>
                                <p className='text-[#9CA3AF] text-[13px] font-medium'>Prev</p>
                                <p className='text-[#6B7280] text-[13px] font-medium'>Next</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

