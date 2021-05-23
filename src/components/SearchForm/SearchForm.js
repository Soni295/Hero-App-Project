import { Form, FormControl, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

export const SearchForm = () => {
  const [name, setName] = useState('')
  const history = useHistory()

  const handleSearch = e => {
    e.preventDefault()
    history.push(`/search/${name}`)
  }

  return (
    <Form
      className='search-form'
      inline
      onSubmit={handleSearch}
    >
      <FormControl
        className="mr-sm-2"
        type="text"
        placeholder="Search"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button type='submit' variant="outline-success">Search</Button>
    </Form>
  )
}
