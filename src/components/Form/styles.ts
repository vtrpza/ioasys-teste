import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const FormContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
  width: 15rem;
  height: 15rem;
`
