import styled, { css } from 'styled-components'
import { bgProps } from '.'

type backgroundProps = Pick<bgProps, 'bg'>

const modifier = {
  login: () => css`
    background: url(img/BG-login.svg) no-repeat center center fixed;
    ${Content} {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  `,
  logged: () => css`
    background: url(img/bg-main.svg) no-repeat center center fixed;
  `
}

export const Background = styled.div<backgroundProps>`
  ${({ bg }) => css`
    ${!!bg && modifier[bg]}
  `}
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #fff;
  width: 100%;
  height: 100%;
  a {
    text-decoration: none;
  }
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
