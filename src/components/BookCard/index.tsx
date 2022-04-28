import * as S from './styles'

export type BookCardProps = {
  id?: string
  title?: string
  authors?: string[]
  pageCount?: string
  publisher?: string
  published?: string
  category?: string
  language?: string
  imageUrl?: string

  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BookCard = ({
  title,
  authors,
  pageCount,
  publisher,
  published,
  imageUrl,
  onClick
}: BookCardProps) => (
  <S.Wrapper onClick={onClick}>
    <S.ImageBox>
      <img src={imageUrl} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.PrimaryInfo>
        <S.Title>{title}</S.Title>
        <S.Author>{authors.map((el) => el)}</S.Author>
      </S.PrimaryInfo>
      <S.SecondaryInfo>
        <S.Pages>{pageCount}</S.Pages>
        <S.Publisher>{publisher}</S.Publisher>
        <S.Published>{published}</S.Published>
      </S.SecondaryInfo>
    </S.Info>
  </S.Wrapper>
)

export default BookCard
