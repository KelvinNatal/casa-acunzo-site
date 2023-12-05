"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';

import image from '../../../public/assets/foto.png';
import { useInView } from 'react-intersection-observer';

const Sobre: React.FC<{setSobre: React.Dispatch<React.SetStateAction<boolean>>}> = (props) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.50,
    });

    useEffect(() => {
        if(inView) props.setSobre(true);
        else props.setSobre(false);
    }, [inView])

  return (
    <section className='w-full h-full flex justify-center' id="sobre" ref={ref}>
        <div className='w-[100vw] h-100 lg:w-[80vw] lg:h-[80vh] flex flex-col-reverse lg:flex-row p-2 items-center'>
            <div className='w-6/12 h-full  rounded-md flex flex-col items-center justify-center my-12 lg:my-0'>
                <Image
                className='w-[250px] rounded-md'
                src={image}
                alt='Responsável LuizRicardo Acunzo'/>
                <h1 className='w-[250px] text-center font-bold text-3xl my-3'>Luiz Ricardo Acunzo</h1>
                <p className='text-xl'>Responsável</p>
                <button className='w-[250px] h-100 bg-slate-950 text-slate-50 mt-4 p-2 rounded-md'><a href='#contato'>Contate-me!</a></button>
            </div>
            <div className='w-10/12 lg:w-6/12 h-full flex flex-col items-center justify-center'>
                <h1 className='font-bold text-5xl mb-10  mt-8 lg:mt-0'>Sobre Nós</h1>
                <div className='w-100 lg:w-[450px] h-100 flex flex-col items-center text-justify'>
                    <p className='mb-5'>Fundada pelos irmãos Danilo Acunzo e Luiz
                    Ricardo Acunzo, a Casa Acunzo nasceu do desejo
                    de criar um espaço que refletisse a diversidade e a
                    riqueza do mundo do vinho. Nossa jornada
                    começou com a ideia de compartilhar nosso amor
                    por essa bebida incrível com você, nosso estimado
                    cliente.</p>

                    <p className=''>Hoje, Luiz é o responsável, empenhado em fazer de
                    sua degustação uma experiência enriquecedora, ágil e inspiradora.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sobre