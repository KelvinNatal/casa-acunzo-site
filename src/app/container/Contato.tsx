"use client";
import React, { FormEvent, useEffect, useState } from 'react';
import { GrInstagram } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLocationDot } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contato: React.FC<{setContato: React.Dispatch<React.SetStateAction<boolean>>}> = (props) => {

    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');  
    const [number, setNumber] = useState('');  
    const [text, setText] = useState('');  
    const [buttonText, setButtonText] = useState('Enviar');
    const [width, setWidth] = useState(globalThis.window?.innerWidth);

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.50,
    });

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    const isMobile = width <= 768;

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    useEffect(() => {
        if(inView) props.setContato(true);
        else props.setContato(false);
    }, [inView]);

    
    const sendEmail = async (event: FormEvent) => {
        event.preventDefault();
        setButtonText('Enviando...');
    
        const templateParams = {
            from_name: name,
            email: email,
            number: number,
            text: text, 
        }
       
        if(name === '' || email === '' || text === ''){
            alert('Preencha todos os campos');
            setButtonText('Enviar');
            return;
        }

        emailjs.send("service_cjjyjrm", "template_lnibiea", templateParams,"ojJPo230gzjXKKS91")
        .then((response) => {
            setButtonText("Enviado!");
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setNumber('')
            setText('')
        }, () => {
            alert('Erro ao enviar email, tente novamente');
            console.log('ERRO')
        })
        
      }

  return (
    <section className='w-full h-full flex justify-center' id="contato" ref={ref}>
        <div className='w-[90vw] h-100 lg:w-[80vw] lg:h-[625px] flex flex-col items-center justify-around lg:my-0 my-10'>
            <div className='w-full lg:w-8/12 h-100 flex flex-col items-center'>
                <h1 className='text-4xl font-bold mb-5'>Fale Conosco!</h1>
                <p className='text-center lg:mb-0 mb-4'>Teve interesse em algum dos nossos produtos ou dúvida ?</p>
                <p>Entramos em contato com você!</p>
            </div>
            <div className='w-full h-100 flex lg:flex-row flex-col justify-center items-center rounded-xl mb-5 lg:mt-0 mt-10'>
                <form className='w-[85vw] lg:w-[400px] flex flex-col items-center p-8 bg-slate-900 rounded-2xl shadow-lg lg:mb-0 mb-8' onSubmit={sendEmail}>
                    <input className='w-full p-2 rounded-full mb-4 focus:outline-none ps-4' placeholder='Nome'
                    onChange={(e) => setName(e.target.value)}
                    value={name}/>
                    <input className='w-full p-2 rounded-full mb-4 focus:outline-none ps-4' placeholder='Contato'
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}/>
                    <input className='w-full p-2 rounded-full mb-4 focus:outline-none ps-4' placeholder='E-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                    <textarea className='w-full p-1 rounded-xl mb-5 focus:outline-none ps-4' placeholder='Assunto'
                    onChange={(e) => setText(e.target.value)}
                    value={text}/>
                    <button className='w-[200px] h-100 bg-rose-900/80 hover:bg-rose-900 transition-all p-2 rounded-2xl text-slate-50 font-semibold' type="submit">{buttonText}</button>
                </form>
                <div className='w-[400px] flex flex-col items-center justify-center rounded-2xl'>
                    <h1 className='text-2xl font-bold mb-7'>Outras opções de contato</h1>
                    <div className='w-8/12 h-full flex flex-col items-center justify-center'>
                        <ul className='w-100 font-medium'>
                            <li className='flex items-center ps-1'><GrInstagram className="text-3xl text-pink-800 flex"/><a href="https://www.instagram.com/casa_acunzo" className='ps-6' target='_blank'>@casa_acunzo</a></li>
                            <li className='flex items-center ps-1 my-3'><BsWhatsapp className="text-3xl text-emerald-800"/><a href={isMobile ? 'https://wa.me/5511982581286' : 'https://web.whatsapp.com/send/?phone=5511982581286&text&type=phone_number&app_absent=0'} target="_blank" rel="noopener noreferrer" className='ps-6'>(11) 98258-1286</a></li>
                            <li className='flex items-center'><HiOutlineMail className="text-4xl text-blue-800"/><a href="mailto:luizricardo@casaacunzo.com.br" className='ps-6'>luizricardo@casaacunzo.com.br</a></li>
                        </ul>
                        <figure className='w-full h-[2px] bg-slate-900 my-8'/>
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