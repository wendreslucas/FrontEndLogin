import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../services/api'

export const LoginContext = createContext()

export const LoginContextProvider = ({ children }) => {
  const navigate = useNavigate()

  async function onSubmit(req, res) {
    api
      .post('/user/authenticate', {
        name: req.name,
        password: req.password
      })
      .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', res.data.user.name)
        navigate('/home')

        if (res.status === 200) {
          navigate('/home')
          toast.success('Login realizado com sucesso!')
        }
      })
      .catch(err => {
        if (err.response.status === 422) {
          toast.error('Ops! Verifique os dados!')
        }

        if (err.response.status === 404) {
          toast.error('Ops! Verifique os dados!')
        }

        if (err.response.status === 405) {
          toast.error('Falha na comunicação com servidor!')
        }

        if (err.response.status === 500) {
          toast.error('Falha no servidor!')
        }
      })
  }

  return (
    <LoginContext.Provider value={{ onSubmit }}>
      {children}
    </LoginContext.Provider>
  )
}
