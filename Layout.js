import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className='h-auto flex flex-row justify-start w-[100%]'>
            <div className=' lg:block hidden w-[20%]'>
                <Sidebar />
            </div>
            <div className='flex-1 h-auto  w-[80%]' style={{ backgroundColor: '#F5F5F5' }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;