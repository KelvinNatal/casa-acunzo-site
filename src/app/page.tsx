import Whatsapp from "./components/Whatsapp";
import Catalogo from "./container/Catalogo";
import Contato from "./container/Contato";
import Footer from "./container/Footer";
import Header from "./container/Header";
import Navbar from "./container/Navbar";
import Sobre from "./container/Sobre";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100 overflow-x-hidden">
        <Navbar/>
        <Header/>
        <Sobre/>
        <Catalogo/>
        <Contato/>
        <Footer/>
        <Whatsapp/>
    </main>
  )
}
