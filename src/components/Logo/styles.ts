import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div``

export const Content = styled.div<LogoProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`

export const Title = styled.h2``
