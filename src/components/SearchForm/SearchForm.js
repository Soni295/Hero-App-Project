import { Form, Button } from 'react-bootstrap'

import { HandleSearch } from '../../services/HandleSearch/HandleSearch'
import { Input } from '../FormInput/FormInput'
import './style.css'

export const SearchForm = () => {
  const {formik} = HandleSearch()
  return (
    <Form
      className='search-form'
      onSubmit={formik.handleSubmit}
    >
      <Input
        className="mr-sm-2 search-inline "
        name='search'
        type='text'
        placeholder='batman'
        control={formik}
      >
        <Button type='submit' variant="outline-success">Search</Button>
      </Input>
    </Form>
  )
}
