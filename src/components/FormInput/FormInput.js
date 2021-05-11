import { Form } from 'react-bootstrap'

export const Input = ({name, placeholder, type, control}) => {
  const label = name.replace(/^\w{1}/ , L => L.toUpperCase()) + ' :'
  return(
    <Form.Group controlId={'ctrl' + name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={control.handleChange}
        value={control.values[name]}
        onBlur={control.handleBlur}
      />
      {control.errors[name] && control.touched[name]
        ? <div>{control.errors[name]}</div>
        : null
      }
    </Form.Group>
  )
}
