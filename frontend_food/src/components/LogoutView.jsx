import React from 'react'
import { useCookies } from 'react-cookie'
import './LogoutView.css'

const LogoutView = ({text_or_icon}) => {
  const [token, setToken, removeToken] = useCookies(['myToken'])
  const [group, setGroup, removeGroup] = useCookies(['group_name'])
  return (
    <div>
      <button onClick={() => {
        removeToken(['myToken'])
        removeGroup(['group_name'])
      }} className={text_or_icon==='text'? "button_style" : "icon"}>
        {text_or_icon === 'text' ? "Logout" : <i className="fas fa-sign-out-alt text-white icon"></i>}
      </button>
    </div>
  )
}

export default LogoutView
