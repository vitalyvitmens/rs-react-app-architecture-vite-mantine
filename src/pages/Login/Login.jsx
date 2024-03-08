import { useAuth } from '../../context/AuthProvider'
import { useEffect, useTransition } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Component } from '../../components/Component/Component'
import { BtnMantine } from '../../components/BtnMantine/BtnMantine'
import { InputMantine } from '../../components/InputMantine/InputMantine'
import styles from './Login.module.css'

export const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const from = location.state?.from || '/'
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const username = formData.get('username')

    auth.signin(username, () => {
      startTransition(() => {})
    })
  }

  useEffect(() => {
    if (auth.user !== null) {
      startTransition(() => {
        navigate(from, {
          replace: true,
        })
      })
    }
  }, [auth.user, from, navigate, startTransition])

  return (
    <div className={styles.Login}>
      <form onSubmit={handleSubmit}>
        <Component
          component={InputMantine}
          label={'USERNAME'}
          type="text"
          id="text"
          name="username"
          autoComplete="name"
          placeholder={'Ваше имя'}
          radius={5}
          size={30}
        />
        <Component
          component={BtnMantine}
          style={{
            border: '1px solid black',
            marginTop: '42px',
            marginLeft: '-25px',
            padding: '0 10px 5px 10px',
          }}
          title="Login"
          disabled={isPending}
          type="submit"
          variant="filled"
          color="teal"
        />
      </form>
      {isPending && <div>Загрузка...</div>}
    </div>
  )
}
