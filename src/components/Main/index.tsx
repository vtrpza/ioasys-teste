import BookCard from '../BookCard'
import Menu from '../Menu'
import * as S from './styles'

const props = [
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  },
  {
    title: 'Livro 1',
    author: 'Vitor Pouza',
    pages: '49',
    publisher: 'PZA Inc',
    published: '21 abril 2022',
    img: './img/Book 1.png'
  }
]

const Main = () => (
  <S.Wrapper>
    <S.Background>
      <Menu userName="Vitor Henrique" />
      <S.Content>
        {props.map((el, i) => (
          <BookCard
            key={i}
            title={el.title}
            author={el.author}
            pages={el.pages}
            published={el.published}
            publisher={el.publisher}
            img={el.img}
          />
        ))}
      </S.Content>
    </S.Background>
  </S.Wrapper>
)

export default Main
