import { Form } from 'react-bootstrap'

export const Input = ({name, placeholder, type, control}) => {
  const label = name.replace(/^\w{1}/ , L => L.toUpperCase()) + ' :'
  return(
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        data-testid={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={control.handleChange}
        value={control.values[name]}
        onBlur={control.handleBlur}
      />
      {control.errors[name] && control.touched[name]
        ?
          <Form.Text className="text-muted error">
            {control.errors[name]}
          </Form.Text>
        : null
      }
    </Form.Group>
  )
}
