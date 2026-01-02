import styled from 'styled-components'

const CTASticky = () => {
  return (
    <StickyButton href="https://wa.me/seunumeroaqui" target="_blank">
      Agendar Consulta via WhatsApp
    </StickyButton>
  )
}

const StickyButton = styled.a`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    background: #25d366;
    color: #fff;
    text-align: center;
    padding: 15px;
    border-radius: 50px;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 999;
  }
`
export default CTASticky