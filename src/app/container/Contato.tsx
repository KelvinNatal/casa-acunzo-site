import React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLocationDot } from 'react-icons/fa6';

const Contato = () => {
  return (
    <section className='w-full h-full flex justify-center' id="contato">
        <div className='w-[80vw] h-[625px] flex flex-col items-center justify-around'>
            <div className='w-8/12 h-100 flex flex-col items-center'>
                <h1 className='text-4xl font-bold mb-4'>Fale Conosco!</h1>
                <p>Teve interesse em algum dos nossos produtos ou dúvida ?</p>
                <p>Entramos em contato com você!</p>
            </div>
            <div className='w-full h-100 flex justify-center rounded-xl mb-5'>
                <div className='w-[400px] flex flex-col items-center p-8 bg-slate-900 rounded-2xl shadow-lg'>
                    <input className='w-full p-2 rounded-full mb-4 focus:outline-none ps-4' placeholder='Nome'/>
                    <input className='w-full p-2 rounded-full mb-4 focus:outline-none ps-4' placeholder='Contato'/>
                    <input className='w-full p-2 rounded-full mb-4 focus:outline-none ps-4' placeholder='E-mail'/>
                    <input className='w-full p-2 rounded-full mb-4 focus:outline-none ps-4' placeholder='Assunto'/>
                    <button className='w-[200px] h-100 bg-rose-900/80 hover:bg-rose-900 transition-all p-2 rounded-2xl text-slate-50 font-semibold'>Enviar</button>
                </div>
                <div className='w-[400px] flex flex-col items-center justify-center rounded-2xl'>
                    <h1 className='text-2xl font-bold'>Outras opções de contato</h1>
                    <div className='w-8/12 h-full flex flex-col items-center justify-center'>
                        <ul className='w-100 font-medium'>
                            <li className='flex items-center ps-1'><GrInstagram className="text-3xl text-pink-800 flex"/><a href="https://www.instagram.com/casa_acunzo" className='ps-6' target='_blank'>@casa_acunzo</a></li>
                            <li className='flex items-center ps-1 my-3'><BsWhatsapp className="text-3xl text-emerald-800"/><p className='ps-6'>(11) 98258-1886</p></li>
                            <li className='flex items-center'><HiOutlineMail className="text-4xl text-blue-800"/><p className='ps-6'>exemplo@email.com</p></li>
                        </ul>
                        <figure className='w-full h-[2px] bg-slate-900 my-6'/>
                        <div className='w-100 h-100 flex items-center'>
                            <FaLocationDot className="text-3xl ps-2"/>
                            <p className='font-semibold ps-4'>São Paulo, SP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contato