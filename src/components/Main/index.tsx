import BookCardDetail from 'components/BookCardDetail'
import BookCard from 'components/BookCard'
import Menu from 'components/Menu'
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

const props2 = {
  title: 'Change by Design Second line example',
  author: 'Vitor Pouza',
  pages: '423',
  notShow: false,
  publisher: 'PZA inc',
  published: '21/04/2022',
  language: 'PT-BR',
  originalTitle: 'Teste livro',
  isbn10: '242',
  isbn13: '242',
  img: './img/Book-full.png',
  review:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque ante ut erat blandit, ut vulputate massa eleifend. In vulputate euismod nisl. Nam orci erat, luctus sed enim et, tristique malesuada urna. Nullam posuere suscipit felis, tincidunt viverra turpis pellentesque eu. Duis blandit sed sem eu commodo. Mauris fringilla id ipsum in condimentum. Curabitur non odio tristique, lobortis lectus at, vehicula massa. Integer odio ex, consequat non ipsum nec, tempus tempor metus. Cras facilisis ante et efficitur vehicula. Nunc finibus ornare facilisis. Maecenas turpis metus, blandit ac gravida eget, faucibus et elit. Cras est felis, commodo at gravida a, feugiat eget eros. Maecenas sollicitudin neque id arcu varius, nec sodales libero malesuada.'
}
const Main = () => {
  return (
    <S.Background>
      <Menu userName="Vitor Henrique" />
      <S.Content>
        <BookCardDetail {...props2} />
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
  )
}

export default Main
