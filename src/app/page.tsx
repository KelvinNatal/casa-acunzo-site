"use client";

import { useState } from "react";
import Whatsapp from "./components/Whatsapp";
import Catalogo from "./container/Catalogo";
import Contato from "./container/Contato";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Navbar from "./container/Navbar";
import Sobre from "./container/Sobre";

export default function Home() {
  const [home, setHome] = useState<boolean>(false);
  const [sobre, setSobre] = useState<boolean>(false);
  const [catalogo, setCatalogo] = useState<boolean>(false);
  const [contato, setContato] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100 overflow-x-hidden">
        <Navbar home={home} sobre={sobre} catalogo={catalogo} contato={contato}/>
        <Header setHome={setHome}/>
        <Sobre setSobre={setSobre}/>
        <Catalogo setCatalogo={setCatalogo}/>
        <Contato setContato={setContato}/>
        <Footer/>
        <Whatsapp/>
    </main>
  )
}
