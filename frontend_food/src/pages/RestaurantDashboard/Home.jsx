import React from 'react'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'

const Home = () => {
  const [token] = useCookies(['myToken'])
  const [group] = useCookies(['group_name'])
  const navigator = useNavigate()

  useEffect(() => {
    group['group_name'] === "customer"  ? navigator('/') : navigator('/restaurant-dashboard/')
  }, [])

  return (
    <div>
    {token['myToken'] ? <Dashboard /> : "" }
    </div>
  )
}

export default Home
