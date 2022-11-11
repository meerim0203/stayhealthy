import './styles/style.scss'
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Programs from "./components/programs/programs";
import Pricing from "./components/pricing/pricing";
import About from "./components/about/about";
import Footer from "./components/footer/footer";


function App() {
    return (
        <>
            <Header/>
            <Hero/>
            <Programs/>
            <Pricing/>
            <About/>
            <Footer/>
        </>
    );
}

export default App;
