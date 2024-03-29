import React from 'react'
import { Container } from './styles'
import errors from '../../Utils/errors.json'

export function InputError({ type, field }) {
  return <Container>{errors[field][type]}</Container>
}
