import * as S from './styles'
import heroImage from '../../../assets/images/hero.png'
import Button from '../../ui/button'

const Hero = () => {
  return (
    <S.Hero className='container'>
      <S.HeroContent>
        <S.HeroContentCopy>
          <h3>Apoio jurídico <span>humano</span> em momentos<span> decisivos</span></h3>
          <p>
            Especializada em direito de família, oferecendo suporte integral e humanizado para mulheres em processo de separação e divórcio.
          </p>
        </S.HeroContentCopy>
        <Button>Agende uma consulta</Button>
      </S.HeroContent>
      <img src={heroImage} alt="" />
    </S.Hero>
  )
}

export default Hero