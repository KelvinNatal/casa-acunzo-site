"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'

import image from '../../../public/assets/vinho.png';
import { useInView } from 'react-intersection-observer';

const Catalogo: React.FC<{setCatalogo: React.Dispatch<React.SetStateAction<boolean>>}> = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.50,
  });

  useEffect(() => {
    if(inView) props.setCatalogo(true);
    else props.setCatalogo(false);
  }, [inView])

  return (
    <section className='w-full h-full flex justify-center bg-slate-950 p-4' id="catalogo" ref={ref}>
        <div className='w-[90vw] h-100 lg:w-[80vw] lg:h-[80vh] flex lg:flex-row flex-col items-center bg-slate-100 rounded-md lg:py-0 py-5'>
            <div className='w-full lg:w-6/12 h-full flex flex-col items-start justify-center'>
                <Image
                className='max-w-[350px] lg:max-w-[550px] max-h-[80vh] rounded-md'
                src={image}
                alt='Responsável Luiz Ricardo Acunzo'/>
            </div>
            <div className='w-4/12 h-[6px] lg:w-[3px] my-10 lg:my-0 lg:h-2/6 bg-slate-900 rounded-full'></div>
            <div className='w-full lg:w-6/12 h-full flex flex-col items-center justify-center'>
                <h1 className='font-bold text-3xl lg:text-5xl mb-6 text-center'>Conheça os nossos Produtos</h1>
                <p className='w-[300px] mb-5 text-center font-medium text-lg'>Clique abaixo para conhecer os
                nossos produtos disponíveis para venda.</p>
                <button className='w-[225px] h-100 bg-slate-950 text-slate-50 mt-4 p-3 rounded-md'>Acessar Agora!</button>
            </div>
        </div>
    </section>
  )
}

export default Catalogo