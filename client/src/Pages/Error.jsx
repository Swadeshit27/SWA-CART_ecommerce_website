import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div class="w-full h-screen flex items-center justify-center" >
        <div>
          <img src="404.svg" alt="about" class="img-fluid" width="500" />
          <h1 className=' opacity-50'>Oops Page not found </h1>
          <Link className='cartBtn mt-5 mx-auto' to="/">Go back</Link>
        </div>
      </div>
    </>
  )
}

export default Error