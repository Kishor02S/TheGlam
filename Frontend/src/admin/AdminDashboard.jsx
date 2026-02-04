import { useEffect, useState } from 'react'

const AdminDashboard = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/api/bookings')
      .then(res=>res.json())
      .then(setData)
  },[])

  return (
    <div style={{padding:30}}>
      <h3>Bookings</h3>
      {data.map((b,i)=>(
        <p key={i}>{b.fullName} – {b.service}</p>
      ))}
    </div>
  )
}
export default AdminDashboard
