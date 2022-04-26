import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  ${media.lessThan('large')`
  margin-left: 0;
  margin-right: 0;
  `}
  margin-left: 13rem;
  margin-right: 11rem;
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
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
