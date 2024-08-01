import React from 'react'
import './ChangePassword.scss'

function ChangePassword() {
  return (
    <>
      <div className='change-password'>
        <div className='text'>
          <h2>Change Password</h2>
        </div>
        <div className='change'>


          <div className="input-container">
            <label htmlFor="name-input" className="name-label">Old Password</label>
            <input
              type="text"
              id="name-input"
              className="name-input"
              placeholder="Enter Your Old Password"
            />
          </div>

          <div className="input-container">
            <label htmlFor="name-input" className="name-label">New Password</label>
            <input
              type="text"
              id="name-input"
              className="name-input"
              placeholder="Enter Your New Password"
            />
          </div>

          <div className="input-container">
            <label htmlFor="name-input" className="name-label">Confirm Password</label>
            <input
              type="text"
              id="name-input"
              className="name-input"
              placeholder="Enter Your New Password"
            />
          </div>

          {/* <div className="input-container">
            <label htmlFor="name-input" className="name-label">Mobile Number</label>
            <input
              type="text"
              id="name-input"
              className="name-input"
              placeholder="Enter Mobile Number"
            />
          </div> */}

        </div>

        <div className='submit'>
          <p>Submit</p>
        </div>
      </div>
    </>
  )
}

export default ChangePassword
