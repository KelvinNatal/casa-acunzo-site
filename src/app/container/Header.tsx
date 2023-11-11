import Image from 'next/image';
import React from 'react';
import taca from '../../../public/assets/taca1.png';

const Header = () => {
  return (
    <section className='w-full h-full flex justify-center bg-no-repeat bg-center bg-cover bg-background-header mt-16' id="header">
        <div className='w-[80vw] h-[80vh] flex p-2 items-center'>
            <div className='w-6/12 h-full flex justify-center items-center'>
                <Image
                className='max-w-[550px]'
                src={taca}
                alt='Imagem Taça Vinho'/>
            </div>
            <div className='w-6/12 h-[350px] flex flex-col items-center justify-around'>
                <h1 className='text-slate-50 font-semibold text-6xl'>Casa Acunzo</h1>
                <p className='w-[500px] text-slate-200 font-light text-center text-xl'>Desfrute de uma experiência sensorial incomparável em nossa casa de vinhos. Explore uma seleção cuidadosamente escolhida 
                de rótulos de qualidade, provenientes das melhores vinícolas do mundo.</p>
                <button className='w-100 h-100 bg-red-900/80 hover:bg-red-900 p-3 px-6 rounded-xl text-slate-50 text-lg'>Conheça nosso catálogo</button>
            </div>
        </div>
    </section>
  )
}

export default Header