import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 27rem;
  vertical-align: center;
  height: 16rem;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    margin-left: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
  cursor: pointer;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04), 0px 8px 80px rgba(0, 0, 0, 0.09);
`

export const ImageBox = styled.div`
  height: 16rem;
  width: 12rem;
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0px 1.8px 2.2px rgba(0, 0, 0, 0.017),
      0px 4.3px 5.3px rgba(0, 0, 0, 0.024), 0px 8.1px 10px rgba(0, 0, 0, 0.03),
      0px 14.5px 17.9px rgba(0, 0, 0, 0.036),
      0px 27.2px 33.4px rgba(0, 0, 0, 0.043), 0px 65px 80px rgba(0, 0, 0, 0.06);
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;
  overflow: hidden;
  ${({ theme }) =>
    css`
      padding-left: ${theme.spacings.xxsmall};
    `}
`

export const PrimaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;
  `}
`

export const SecondaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Author = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkPink};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Pages = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Publisher = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const Published = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
