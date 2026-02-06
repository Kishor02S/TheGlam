import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/bookings')
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b, index) => (
            <tr key={index}>
              <td>{b.name}</td>
              <td>{b.service}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>{b.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default AdminDashboard
