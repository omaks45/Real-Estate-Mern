import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      {/* Sign Up heading */}
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      {/* Sign Up form */}
      <form className='flex flex-col gap-4'>
        {/* Username input */}
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'></input>
        {/* Email input */}
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email'></input>
        {/* Password input */}
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password'></input>
        {/* Sign Up button */}
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      {/* Sign in link */}
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        {/* Link to Sign In page */}
        <Link to={"/sign-in"}><span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
