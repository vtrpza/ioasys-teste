import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div``

export const Content = styled.div<LogoProps>`
  display: flex;
  align-items: center;
  justify-content: left;

  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`

export const Title = styled.h1<LogoProps>`
  ${({ theme, color }) => css`
    font-weight: ${theme.font.light};
    color: ${theme.colors[color!]};
    margin-left: ${theme.spacings.xsmall};
  `}
`
