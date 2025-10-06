import * as S from './styles'
import heroImage from '../../../assets/images/hero.png'

const Hero = () => {
  return (
    <S.Hero className='container'>
      <div>
        <h3>Apoio jurídico <span>humano</span> em momentos<span> decisivos</span></h3>
        <p>
          Especializada em direito de família, oferecendo suporte integral e humanizado para mulheres em processo de separação e divórcio.
        </p>
        <button>Saiba mais</button>
      </div>
      <img src={heroImage} alt="" />
    </S.Hero>
  )
}

export default Hero