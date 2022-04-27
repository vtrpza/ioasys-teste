/* eslint-disable react/no-unescaped-entities */
import * as S from './styles'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export type BookCardDetailProps = {
  title: string
  author: string | string[]
  pages: string
  publisher: string
  published: string
  language: string
  originalTitle: string
  isbn10: string
  isbn13: string
  img: string
  review: string
  notShow: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BookCardDetail = ({
  title,
  author,
  pages,
  publisher,
  published,
  language,
  originalTitle,
  isbn10,
  isbn13,
  img,
  review,
  notShow,
  onClick
}: BookCardDetailProps) => {
  return (
    <S.Overlay onClick={onClick} notShow={notShow}>
      <S.Wrapper>
        <S.ImgHolder>
          <img src={img} alt={title} />
        </S.ImgHolder>
        <S.Content>
          <S.Headings>
            <S.Title>{title}</S.Title>
            <S.Author>{author}</S.Author>
          </S.Headings>
          <S.Info>
            <b>INFORMAÇÕES</b>
            <p>
              <b>Páginas</b>
              <span>{pages}</span>
            </p>
            <p>
              <b>Editora</b>
              <span>{publisher}</span>
            </p>
            <p>
              <b>Publicação</b>
              <span>{published}</span>
            </p>
            <p>
              <b>Idioma</b>
              <span>{language}</span>
            </p>
            <p>
              <b>Título Original</b>
              <span>{originalTitle}</span>
            </p>
            <p>
              <b>ISBN-10</b>
              <span>{isbn10}</span>
            </p>
            <p>
              <b>ISBN-13</b>
              <span>{isbn13}</span>
            </p>
          </S.Info>
          <S.Review>
            <b>RESENHA DA EDITORA</b>
            <p>
              <FormatQuoteIcon /> {review}
            </p>
          </S.Review>
        </S.Content>
      </S.Wrapper>
    </S.Overlay>
  )
}

export default BookCardDetail
