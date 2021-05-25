import { Form } from 'react-bootstrap'

export const Input = ({name, placeholder, type, control, children, className=''}) => {
  console.log(className)
  return(
    <Form.Group className={className} controlId={name}>
      <Form.Control
        data-testid={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={control.handleChange}
        value={control.values[name]}
        onBlur={control.handleBlur}
      />
      {children}
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
