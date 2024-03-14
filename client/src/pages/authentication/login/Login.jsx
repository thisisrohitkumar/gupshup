import React from 'react'
import '../../../assets/styles/common/authentication.css'

import authImg from '../../../assets/images/auth-bg.jpg'

const Login = () => {
  return (
    <>
      <div className="page__wrapper">
        <div className="authentication__container">
          <div className="authentication__image">
            <img src={authImg} alt="authentication image" />
          </div>
          <div className="authentication__form">
            Form
          </div>
        </div>
      </div>
    </>
  )
}

export default Login