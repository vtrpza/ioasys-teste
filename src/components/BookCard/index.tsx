import * as S from './styles'

export type BookCardProps = {
  title: string
  author: string
  pages: string
  publisher: string
  published: string
  img: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const BookCard = ({
  title,
  author,
  pages,
  publisher,
  published,
  img,
  onClick
}: BookCardProps) => (
  <S.Wrapper onClick={onClick}>
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.PrimaryInfo>
        <S.Title>{title}</S.Title>
        <S.Author>{author}</S.Author>
      </S.PrimaryInfo>
      <S.SecondaryInfo>
        <S.Pages>{pages}</S.Pages>
        <S.Publisher>{publisher}</S.Publisher>
        <S.Published>{published}</S.Published>
      </S.SecondaryInfo>
    </S.Info>
  </S.Wrapper>
)

export default BookCard
