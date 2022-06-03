import React, { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../services/api'

export const RegisterContext = createContext()

export const RegisterContextProvider = ({ children }) => {
  const navigate = useNavigate()

  const createUser = async data => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password
    }
    try {
      await api.post('/user/register', user)
      toast.success('Usuário cadastrado com sucesso!')

      navigate('/')
    } catch (err) {
      if (err.response.status === 400) {
        toast.error('Ops! E-mail já cadastrado!')
      }

      if (err.response.status === 404) {
        toast.error('Ops! Username já existe')
      }
    }
  }

  return (
    <RegisterContext.Provider
      value={{
        createUser
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}
