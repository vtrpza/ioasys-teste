import { useSession } from 'next-auth/react'
import * as S from './styles'

export type bgProps = {
  children: React.ReactNode
  bg: 'login' | 'logged'
  menu?: React.ReactNode
}

const Background = ({ children, bg, menu }: bgProps) => {
  const { data: session } = useSession()

  return (
    <S.Background bg={bg}>
      {session && menu && menu}
      <S.Content>{children}</S.Content>
    </S.Background>
  )
}

export default Background
