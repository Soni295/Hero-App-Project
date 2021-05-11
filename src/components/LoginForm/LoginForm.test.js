import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { LoginForm } from './LoginForm'


test('renders content', () => {
  const component = render( <LoginForm />)
  component.getByText('Email: ')
})
