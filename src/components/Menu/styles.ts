import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const UserWelcome = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('large')`
    justify-content: end;
    `}
  width: 14rem;
  align-items: center;
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.xsmall};
      ${media.lessThan('large')`
            display: none;
        `}
  `}
`
