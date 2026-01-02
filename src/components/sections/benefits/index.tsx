import * as S from './styles'
import { Shield, Clock, Heart, Scale } from 'lucide-react' // ou ícones de sua preferência

const Benefits = () => {
  const benefits = [
    { title: 'Sigilo Absoluto', desc: 'Tratamento rigoroso de informações sensíveis.', icon: <Shield /> },
    { title: 'Agilidade', desc: 'Processos focados em resolução eficiente.', icon: <Clock /> },
    { title: 'Acolhimento', desc: 'Suporte humanizado em momentos difíceis.', icon: <Heart /> },
    { title: 'Ética', desc: 'Atuação pautada na transparência total.', icon: <Scale /> }
  ]

  return (
    <S.BenefitsSection>
      <div className="container grid">
        {benefits.map((b, i) => (
          <div className="card" key={i}>
            <div className="icon">{b.icon}</div>
            <h4>{b.title}</h4>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </S.BenefitsSection>
  )
}
export default Benefits