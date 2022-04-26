import Logo from '../Logo'
import Link from 'next/link'
import * as S from './styles'
import LogoutIcon from '@mui/icons-material/Logout'

export type MenuProps = {
  userName: string
}

const Menu = ({ userName }: MenuProps) => (
  <S.Wrapper>
    <Logo color="black" />
    <S.UserWelcome>
      <span>
        Bem-vindo, <strong>{userName}!</strong>
      </span>
      <Link aria-label="Logout link" href="/">
        <a>
          <LogoutIcon fontSize="large" />
        </a>
      </Link>
    </S.UserWelcome>
  </S.Wrapper>
)

export default Menu
