import AboutMe from "./components/sections/about-me"
import Benefits from "./components/sections/benefits"
import CTASticky from "./components/sections/cta-sticky"
import FAQ from "./components/sections/faq"
import Footer from "./components/sections/footer"
import Header from "./components/sections/header"
import Hero from "./components/sections/hero"
import Services from "./components/sections/services"
import SocialProof from "./components/sections/socialproof"
import Testimonials from "./components/sections/testemonials"

const App = () => {
  return (
    <div className="antialiased overflow-x-hidden"> 
      <Header />
      <Hero />         {/* Impacto e Alívio imediato */}
      <Benefits />     {/* NOVO: 3 ou 4 pilares de como ela trabalha (Ex: Sigilo, Agilidade) */}
      <Services />     {/* O que ela resolve (Divórcio, Guarda, etc) */}
      <AboutMe />      {/* Autoridade e Humanização */}
      <SocialProof />  {/* NOVO: Números (Ex: +500 famílias atendidas) */}
      <Testimonials /> {/* Validação emocional */}
      <FAQ />          {/* Quebra de objeções técnicas */}
      <CTASticky />    {/* NOVO: Botão flutuante para mobile */}
      <Footer />
    </div>
  )
}

export default App
