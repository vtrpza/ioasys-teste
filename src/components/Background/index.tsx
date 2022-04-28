import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import * as S from './styles'

export type bgProps = {
  children: React.ReactNode
  bg: 'login' | 'logged'
  menu?: React.ReactNode
  page?: string
}

const Background = ({ children, bg, menu, page }: bgProps) => {
  const { data: session } = useSession()
  const router = useRouter()

  const pagginationHandlerBack = (page: string) => {
    const number = parseInt(page)
    const p = number > 1 ? number - 1 : 1
    const currentPath = router.pathname
    const currentQuery = router.query
    currentQuery.page = JSON.stringify(p)
    router.push({
      pathname: currentPath,
      query: currentQuery
    })
  }

  const pagginationHandler = (page: string) => {
    const currentPath = router.pathname
    const currentQuery = router.query
    currentQuery.page = page + 1

    router.push({
      pathname: currentPath,
      query: currentQuery
    })
  }

  return (
    <S.Background bg={bg}>
      {session && menu && menu}
      <S.Content>{children}</S.Content>
      {session && page && (
        <S.PaginationContainer>
          <a
            onClick={() => {
              pagginationHandlerBack(page)
            }}
          >
            <ArrowBackIosIcon />
          </a>
          <span>Atual: {page} </span>
          <a
            onClick={() => {
              pagginationHandler(page)
            }}
          >
            <ArrowForwardIosIcon />
          </a>
        </S.PaginationContainer>
      )}
    </S.Background>
  )
}

export default Background
