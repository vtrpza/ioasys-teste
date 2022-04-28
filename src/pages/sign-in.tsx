import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Background from 'components/Background'
import FormComponent from 'components/Form'

export default function SignIn() {
  const { push } = useRouter()

  const { data: session } = useSession()
  useEffect(() => {
    if (push && session) {
      push('/')
    }
  }, [push, session])
  return (
    <Background bg="login">
      <FormComponent />
    </Background>
  )
}
