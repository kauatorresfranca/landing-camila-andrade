import * as S from './styles'
import heroImage from '../../../assets/images/hero.png'
import Button from '../../ui/button'

const Hero = () => {
  return (
    <S.HeroSection>
      <div className="container">
        <S.Content>
          <span>ESPECIALISTA EM DIREITO DE FAMÍLIA</span>
          <h1>Apoio jurídico humano em momentos decisivos</h1>
          <p>
            Oferecemos suporte integral e especializado para proteger seus direitos e sua família em processos de separação, divórcio e guarda.
          </p>
          <div className="button-group">
            <Button type='primary'>Falar com a Dra. Camila</Button>
          </div>
        </S.Content>
        <S.ImageSide>
          <img src={heroImage} alt="Dra. Camila Andrade" />
        </S.ImageSide>
      </div>
    </S.HeroSection>
  )
}

export default Hero