/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

// MUI Icons
import ShareIcon from '@material-ui/icons/Share'; import Liked from '@material-ui/icons/Favorite';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';

const aStyle = {
  textDecoration: 'none',
  backgroundColor: 'transparent',
}

function ShareBtns({ react = 'Share', margin = 0 }) {



  return (
    <div
      style={{
        margin,
        padding: 0,
        border: 'none',
        background: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75px',
        color: '#5f6670',

      }} >

      <ShareIcon />
      <span style={{ marginLeft: '5px' }}>
        {react}
      </span>
      <div style={{ display: 'flex', marginLeft: '5px' }}>
        <a style={{
          ...aStyle,
          color: '#4267B2',
        }}
          href='#'>

          <FacebookIcon />
        </a>
        <a style={{
          ...aStyle,
          color: '#1DA1F2',
          marginLeft: '5px'
        }}
          href='#'>

          <TwitterIcon />
        </a>
        <a
        
        style={{
          ...aStyle,
          color: '#25D366',
          marginLeft: '5px'
        }}
          href='#'>

          <WhatsAppIcon />
        </a>
      </div>




    </div >
  )
}

export default ShareBtns