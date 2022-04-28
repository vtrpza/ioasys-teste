/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { useSession, getSession, signOut } from 'next-auth/react'

import Background from 'components/Background'
import BookCard from 'components/BookCard'
import BookCardDetail, { BookCardDetailProps } from 'components/BookCardDetail'

import { useEffect, useState } from 'react'
import Menu from 'components/Menu'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

export type BooksProps = {
  books: {
    page: string
    totalPages: string
    totalItems: string
    data: BookCardDetailProps[]
  }
}

const Home = ({ books }: BooksProps) => {
  const router = useRouter()
  const { data: session } = useSession()

  const [modalProps, setModalProps] = useState<BookCardDetailProps>()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (router.push && !session) {
      router.push('/sign-in')
    }
  }, [router, session])

  if (session) {
    return (
      <>
        <a
          onClick={() => {
            setOpen(false)
          }}
        >
          <BookCardDetail {...modalProps} show={open} />
        </a>
        <Background
          page={books.page}
          menu={<Menu userName={session.user?.name!} />}
          bg="logged"
        >
          {!!books &&
            books.data?.map((el: BookCardDetailProps) => {
              return (
                <a
                  key={el.id}
                  onClick={() => {
                    setOpen(true)
                  }}
                >
                  <BookCard
                    id={el.id}
                    onClick={() => {
                      setModalProps(el)
                    }}
                    title={el.title}
                    authors={el.authors}
                    pageCount={el.pageCount}
                    publisher={el.publisher}
                    published={el.published}
                    category={el.category}
                    language={el.language}
                    imageUrl={el.imageUrl}
                  />
                </a>
              )
            })}
        </Background>
      </>
    )
  }
  return <h1> Unauthorized</h1>
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData = await getSession(context)
  const myHeaders = new Headers()
  const token = userData?.auth_key
  const page =
    Object.keys(context.query).length === 0 &&
    context.query.constructor === Object
      ? '1'
      : context.query.page
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append(
    'User-Agent',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36'
  )
  myHeaders.append('Authorization', `Bearer ${token}`)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/books?` +
      new URLSearchParams({
        page: page,
        amount: '15'
      }),
    {
      method: 'GET',
      headers: myHeaders
    }
  )
    .then((e) => {
      return e
    })
    .catch((e) => {
      if (e) {
        signOut({ callbackUrl: '/sign-in' })
      }
    })

  const books = await res?.json()
  return {
    props: {
      books
    }
  }
}
