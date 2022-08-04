import React from 'react'
import './ErrorPage.css'

function ErrorMessage({ errorMsg }) {
  return (
    <div className='error-page'>
      <p className='error-msg'>{errorMsg} Ops, there has been an error return again later.</p>
    </div>
  )
}

export default ErrorMessage;