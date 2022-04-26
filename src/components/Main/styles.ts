import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const Background = styled.div`
  background: url(img/bg-main.svg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #fff;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `}
`
