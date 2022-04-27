import styled, { css } from 'styled-components'
import { BookCardDetailProps } from '.'

type OverlayProps = Pick<BookCardDetailProps, 'notShow'>

const wrapperModifiers = {
  show: () => css`
    display: none;
  `
}

export const Overlay = styled.div<OverlayProps>`
  ${({ theme, notShow }) => css`
    background-color: rgba(51, 51, 51, 0.6);
    z-index: ${theme.layers.modal};
    ${notShow && wrapperModifiers.show()}
  `}
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 76rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
  `}
`

export const ImgHolder = styled.div`
  width: 34.9rem;
  height: 51.2rem;
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xlarge};
  `}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 60.8rem;
`

export const Headings = styled.div`
  width: 27.6rem;
  height: auto;
  display: flex;
  text-align: start;
  flex-direction: column;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
    width: 27.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Author = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkPink};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xsmall};
    width: 27.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 27.6rem;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    p {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
      font-weight: ${theme.font.bold};
      width: 100%;
      display: flex;
      justify-content: row;
      justify-content: space-between;
    }
    b {
      color: ${theme.colors.black};
      margin-bottom: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  width: 27.6rem;
  height: auto;
  ${({ theme }) => css`
    b {
      color: ${theme.colors.black};
      margin-bottom: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xsmall};
    }
    p {
      color: ${theme.colors.gray};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
