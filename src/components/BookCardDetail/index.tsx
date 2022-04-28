/* eslint-disable react/no-unescaped-entities */
import * as S from './styles'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export type BookCardDetailProps = {
  id?: string
  title?: string
  authors?: string[]
  pageCount?: string
  publisher?: string
  published?: string
  category?: string
  language?: string
  imageUrl?: string
  description?: string
  isbn10?: string
  isbn13?: string
  show?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BookCardDetail = ({
  title,
  authors,
  pageCount,
  publisher,
  published,
  language,
  imageUrl,
  description,
  isbn10,
  show,
  isbn13
}: BookCardDetailProps) => {
  if (show) {
    return (
      <S.Overlay>
        <S.Wrapper>
          <S.ImgHolder>
            <img src={imageUrl} alt={title} />
          </S.ImgHolder>
          <S.Content>
            <S.Headings>
              <S.Title>{title}</S.Title>
              <S.Author>{authors?.map((el) => el)}</S.Author>
            </S.Headings>
            <S.Info>
              <b>INFORMAÇÕES</b>
              <p>
                <b>Páginas</b>
                <span>{pageCount}</span>
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
                <span>{title}</span>
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
                <FormatQuoteIcon /> {description}
              </p>
            </S.Review>
          </S.Content>
        </S.Wrapper>
      </S.Overlay>
    )
  }
  return <></>
}

export default BookCardDetail
