"use client";
import React, { useEffect, useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs';

const Whatsapp = () => {
    const [width, setWidth] = useState(globalThis.window?.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <a href={isMobile ? 'https://wa.me/5511982581286' : 'https://web.whatsapp.com/send/?phone=5511982581286&text&type=phone_number&app_absent=0'} target="_blank" rel="noopener noreferrer">
            <main className="fixed flex justify-between items-center bottom-2 right-2 bg-emerald-400 rounded-full cursor-pointer z-10" data-aos="fade-left" id="sobre">
            <div className='block hover:flex hover:flex-row-reverse bg-emerald-500 justify-between items-center rounded-full z-20 hover:w-[160px] w-[60px] h-[60px] text-transparent hover:text-slate-50 hover:transition-all'>
                <BsWhatsapp className='hover:absolute flex w-full h-full p-3 hover:w-[60px] hover:h-[60px] hover:block justify-center items-center text-3xl text-slate-50'/>
                <h1 className='text-sm font-bold ms-3 w-[500px] h-full justify-start items-center flex'>Fale conosco</h1>
            </div>        
      </main>
      </a>
    )
}

export default Whatsapp