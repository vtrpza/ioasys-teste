import * as S from './styles'

export type InputProps = {
  inputType: string
  value: string
  button: boolean
  onChange?: () => void
}

const Input = ({ inputType, value, button }: InputProps) => (
  <S.InputWrapper>
    <S.Input aria-label={inputType} type={inputType} value={value} />
    <S.Placeholder data-placeholder={inputType}></S.Placeholder>
    {button && <button>Entrar</button>}
  </S.InputWrapper>
)

export default Input
