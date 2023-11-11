import React from 'react'
import Image from 'next/image'

import image from '../../../public/assets/vinho.png';

const Catalogo = () => {
  return (
    <section className='w-full h-full flex justify-center bg-slate-950 p-4' id="catalogo">
        <div className='w-[80vw] h-[80vh] flex items-center bg-slate-100 rounded-md'>
            <div className='w-6/12 h-full flex flex-col items-start justify-center'>
                <Image
                className='max-w-[550px] max-h-[80vh] rounded-md'
                src={image}
                alt='Responsável LuizRicardo Acunzo'/>
            </div>
            <div className='w-[3px] h-2/6 bg-slate-900 rounded-full'></div>
            <div className='w-6/12 h-full flex flex-col items-center justify-center'>
                <h1 className='font-bold text-5xl mb-6 text-center'>Conheça o nosso Catálogo</h1>
                <p className='w-[300px] mb-5 text-center font-medium text-lg'>Clique abaixo para conhecer os
                nossos produtos disponíveis para venda.</p>
                <button className='w-[225px] h-100 bg-slate-950 text-slate-50 mt-4 p-2 rounded-md'>Acessar Catálogo</button>
            </div>
        </div>
    </section>
  )
}

export default Catalogo