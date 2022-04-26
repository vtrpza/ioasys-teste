import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`

export const UserWelcome = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan('large')`
    justify-content: end;
    `}
  width: 20rem;
  align-items: center;
  ${({ theme }) => css`
    span {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.black};
      ${media.lessThan('large')`
            display: none;
        `}
  `}
`
