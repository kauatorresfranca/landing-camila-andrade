import * as S from './styles'
import logo from '../../../assets/images/logo.png'
const Header = () => {
  return (
    <S.Header>
      <div className="container">
        <img src={logo} alt="logo" />
        <nav>
          <ul>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre Mim</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </S.Header>
  )
}

export default Header