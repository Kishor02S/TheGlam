import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const nav = useNavigate()

  const login = () => {
    localStorage.setItem('admin','true')
    nav('/admin/dashboard')
  }

  return <button onClick={login}>Login as Admin</button>
}
export default AdminLogin
