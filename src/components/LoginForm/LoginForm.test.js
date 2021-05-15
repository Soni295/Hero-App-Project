import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { LoginForm } from './LoginForm'

test('renders content', () => {
  const component = render(<LoginForm />)
  component.debug()
})

test(`Label "Email :" exist`, () => {
  const component = render(<LoginForm />)
  const { getByText, queryByTestId} = component
  fireEvent.change(queryByTestId('email'), {target: {value: 'hola'}})
  component.debug()

})

test(`Label "Password :" exist`, () => {
  const { getByText } = render(<LoginForm />)
  const Password = getByText('Password :')
})

/*
test(`click the the button 'Send' `, () => {
  const { getByText } = render(<LoginForm />)
  fireEvent.click(getByText('Send'))
})

*/
