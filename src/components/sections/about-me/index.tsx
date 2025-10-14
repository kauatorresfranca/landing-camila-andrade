import * as S from './styles';
import aboutMeImage from '../../../assets/images/about.png';

const AboutMe = () => {
  return (
    <S.AboutMe className="container">
      <h3>Sobre <span>Mim</span></h3>
      <S.AboutMeContent>
        <S.AboutMeImage src={aboutMeImage} alt="Dra. Camila Andrade" />
        <S.AboutMeText>
          <h4>Dra. Camila Andrade</h4>
          <p>
            Com mais de 15 anos de experiência, Dra. Camila Andrade é uma advogada dedicada a oferecer soluções jurídicas personalizadas com ética e comprometimento. Especializada em Direito de Família, Mediação de Conflitos e Consultoria Jurídica, ela atua com foco no bem-estar de seus clientes, garantindo suporte em momentos desafiadores. Sua abordagem combina conhecimento técnico, escuta ativa e estratégias inovadoras para alcançar os melhores resultados.
          </p>
          <S.AboutMeTraining>
            <h5>Formação e Experiência</h5>
            <ul>
              <li>Graduação em Direito - Universidade Federal de São Paulo (2008)</li>
              <li>Pós-graduação em Direito de Família - PUC-SP (2010)</li>
              <li>Certificação em Mediação de Conflitos - OAB-SP (2012)</li>
              <li>Advocacia Particular - São Paulo (2008-atual)</li>
            </ul>
          </S.AboutMeTraining>
        </S.AboutMeText>
      </S.AboutMeContent>
    </S.AboutMe>
  );
};

export default AboutMe;