import Logo from 'components/Logo'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import * as S from './styles'

export type FormProps = {
  password: string
  email: string
}

const FormComponent = () => {
  const { push } = useRouter()
  return (
    <S.Wrapper>
      <Logo color="white" />
      <S.FormContainer>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={async (
            values: FormProps,
            { setSubmitting }: FormikHelpers<FormProps>
          ) => {
            const result = await signIn('credentials', {
              ...values,
              redirect: false,
              callbackUrl: '/'
            })
            setSubmitting(false)
            if (result?.url) {
              return push(result?.url)
            }
            console.error('email ou senha invalida')
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
            <label htmlFor="password">Senha</label>
            <Field id="password" name="password" type="password" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default FormComponent
