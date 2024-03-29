import { useAuth } from '../../context/AuthProvider'
import { useEffect, useTransition } from 'react'
import { useNavigate } from 'react-router-dom'
import { Component } from '../Component/Component'
import { BtnMantine } from '../BtnMantine/BtnMantine'
import styles from './AuthStatus.module.css'

export function AuthStatus() {
  const navigate = useNavigate()
  const auth = useAuth()
  const [isPending, startTransition] = useTransition()

  const handleSignout = () => {
    auth.signout(() => {
      startTransition(() => {
        navigate('/')
      })
    })
  }

  useEffect(() => {
    if (auth.user === null) {
      startTransition(() => {
        navigate('/login')
      })
    }
  }, [auth.user, navigate, startTransition])

  if (auth.user === null) {
    return (
      <div className={styles.authStatus}>
        Вы не авторизованы!
        <Component
          component={BtnMantine}
          style={{border: '1px solid black', marginTop: '22px'}}
          title="Авторизоваться"
          variant="filled"
          color="teal"
          disabled={isPending}
          onClick={() => {}}
        />
        {isPending && <div>Загрузка...</div>}
      </div>
    )
  }

  return (
    <div className={styles.authStatus}>
      Добро пожаловать <span style={{ fontWeight: 'bold' }}>{auth.user}</span>
      <Component
        component={BtnMantine}
        style={{border: '1px solid black', marginTop: '22px'}}
        title="Выйти"
        variant="filled"
        color="#dc2626"
        disabled={isPending}
        onClick={handleSignout}
      />
      {isPending && <div>Загрузка...</div>}
    </div>
  )
}
