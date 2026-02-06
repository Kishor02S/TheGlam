import { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const Booking = () => {
  const [data, setData] = useState({
    fullName:'',
    phone:'',
    service:'',
    dateTime:'',
    note:''
  })

  const handleChange = e =>
    setData({...data,[e.target.name]:e.target.value})

  const submit = async e => {
    e.preventDefault()

    await fetch('http://localhost:5000/api/bookings',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data)
    })

    alert('Booking Submitted')
    setData({fullName:'',phone:'',service:'',dateTime:'',note:''})
  }

  return (
    <Container className="my-5">
      <h3>Book Appointment</h3>
      <Form onSubmit={submit}>
        <Form.Control name="fullName" placeholder="Name" onChange={handleChange}/>
        <Form.Control name="phone" className="my-2" placeholder="Phone" onChange={handleChange}/>
        <Form.Control name="service" className="my-2" placeholder="Service" onChange={handleChange}/>
        <Form.Control name="dateTime" className="my-2" placeholder="Date & Time" onChange={handleChange}/>
        <Form.Control name="note" className="my-2" placeholder="Note" onChange={handleChange}/>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default Booking
