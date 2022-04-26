import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Background = styled.div`
  background: url(img/bg-main.svg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #fff;
  width: 100%;
  height: 100vh;
  ${media.lessThan('large')`
    height: 100%;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.medium};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `}
`
