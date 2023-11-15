"use client"

import Image from 'next/image';
import React, { MutableRefObject, useEffect } from 'react';
import taca from '../../../public/assets/taca1.png';
import { useInView } from 'react-intersection-observer';

const Header: React.FC<{setHome: React.Dispatch<React.SetStateAction<boolean>>}> = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.50,
  });

  useEffect(() => {
    if(inView) props.setHome(true);
    else props.setHome(false);
  }, [inView])

  return (
    <section className='w-full h-full flex justify-center bg-no-repeat bg-center bg-cover bg-background-header mt-16' id="header" ref={ref}>
      <div className='w-[95vw] h-100 lg:w-[80vw] lg:h-[80vh] flex flex-col lg:flex-row p-2 items-center lg:mb-0 mb-10'>
          <div className='w-6/12 h-100 flex justify-center items-center'>
              <Image
              className='max-w-[325px] lg:max-w-[500px]'
              src={taca}
              alt='Imagem Taça Vinho'/>
          </div>
          <div className='w-full lg:w-6/12 h-[350px] flex flex-col items-center justify-around'>
              <h1 className='text-slate-50 font-semibold text-5xl mb-2 lg:text-6xl'>Casa Acunzo</h1>
              <p className='w-100 lg:w-[500px] text-slate-200 font-light text-center text-xl'>Desfrute de uma experiência sensorial incomparável em nossa casa de vinhos. Explore uma seleção cuidadosamente escolhida 
              de rótulos de qualidade, provenientes das melhores vinícolas do mundo.</p>
              <a href='#catalogo'><button className='w-100 h-100 bg-red-900/80 hover:bg-red-900 p-3 px-6 rounded-xl text-slate-50 text-lg'>Conheça nosso catálogo</button></a>
          </div>
      </div>
    </section>
  )
}

export default Header