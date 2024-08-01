import React from 'react'
import './SettingsSecurity.scss'
import { Link } from 'react-router-dom'
import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'
import four from './img/four.png'

function SettingsSecurity() {
  return (
    <>
      <div className='settings'>

        <div className='settings-text'>
          <h2>Settings & Security</h2>
        </div>

        <div className='settings-boxes'>
          <div className='box'>
            <div className='img'>
              <img src={one} alt="" />
            </div>

            <p>Notification</p>
          </div>

          <div className='box'>
          <div className='img'>
              <img src={two} alt="" />
            </div>
            <p>Address</p>
          </div>

          <div className='box'>
          <div className='img'>
              <img src={three} alt="" />
            </div>
            <p>Language</p>
          </div>

          <div className='box'>
          <div className='img'>
              <img src={four} alt="" />
            </div>
            <p>Password</p>
          </div>



        </div>

      </div>
    </>
  )
}

export default SettingsSecurity
