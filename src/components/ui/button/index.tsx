import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  type?: 'primary' | 'secondary'
}

const Button = ({ children, type }: ButtonProps) => {
  return (
    <S.Button type={type}>
      {children}
    </S.Button>
  )
}

export default Button