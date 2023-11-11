import Image from 'next/image'
import React from 'react'

import logo from '../../../public/assets/footerLogo.png';
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='w-screen h-[350px] bg-slate-900 flex flex-col justify-center items-center'>
        <div className='w-[80vw] h-4/6 flex items-center justify-around my-10'>
            <div className='w-[525px] h-full flex bg-slate-50 rounded-xl items-center justify-around'>
                <Image
                className='w-[185px]'
                src={logo}
                alt='Footer Logo'/> 
                
                <figure className='w-[2px] h-4/6 bg-slate-900'/>

                <div className='flex flex-col justify-center me-5'>
                    <h1 className='text-lg'>Mooca - São Paulo</h1>
                    <h1 className='text-lg my-2'>(11) 98258-1886</h1>
                    <h1 className='text-lg'>email@example.com</h1>
                </div>
            </div>

            <div className='w-3/12 h-full mx-8 flex flex-col p-2 text-slate-50'>
                <h1 className='font-semibold text-2xl'>Atendimento</h1>
                <div className='w-full mt-3 mb-6'>
                    <p className=''>Segunda a Sexta</p>
                    <p>08h ás 18h</p>
                </div>

                <p>Fechado Sábados e Domingos</p>
            </div>

            <div className='w-3/12 h-full flex flex-col p-2 text-slate-50'>
                <h1 className='font-semibold text-2xl'>Nossas Redes</h1>
                <div className='w-full h-100 flex items-center mt-3'>
                    <GrInstagram className="text-2xl text-pink-800 flex"/><a href="https://www.instagram.com/casa_acunzo" className='ps-2' target='_blank'>@casa_acunzo</a>
                </div>
            </div>
        </div>

        <div className='w-[60vw] h-100 flex justify-center items-center border-t border-slate-300 mb-4'>
            <h1 className='text-slate-200 font-medium pt-4'>Onde o lar dos sabores reside - Vinhos e bebidas de excelência</h1>
        </div>
    </div>
  )
}

export default Footer