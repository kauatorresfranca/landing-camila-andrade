import * as S from './styles'

import mediacaoConflitos from '../../../assets/images/mediacao.svg'
import consultoriaJuridica from '../../../assets/images/balanca.svg'
import direitoFamilia from '../../../assets/images/familia.svg'

const Services = () => {
  return (
    <S.Services className='container'>
      <h3>Nossos <span>Serviços</span></h3>
      <S.ServicesList>
        <S.ServiceItem>
          <img src={consultoriaJuridica} alt="" />
          <h4>Consultoria Jurídica</h4>
          <p>Orientação e suporte em questões legais.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <img src={mediacaoConflitos} alt="" />
          <h4>Mediação de Conflitos</h4>
          <p>Facilitação de acordos entre partes em disputa.</p>
        </S.ServiceItem>
        <S.ServiceItem>
          <img src={direitoFamilia} alt="" />
          <h4>Assessoria em Direito de Família</h4>
          <p>Especialização em casos de divórcio e guarda de filhos.</p>
        </S.ServiceItem>
      </S.ServicesList>
    </S.Services>
  )
}

export default Services