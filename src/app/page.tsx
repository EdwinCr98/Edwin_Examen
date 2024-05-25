import Header from "./components/Header";
import About from "./components/About";
import Caro from "./components/Caro";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import FooterSN from "./components/FooterSN";


export default function Home() {
  return (
   <div>
    <Header/>
    <About/>
    <Skills/>
    <Caro/>
    <Footer/>
    <FooterSN/>
   </div>
  );
}
