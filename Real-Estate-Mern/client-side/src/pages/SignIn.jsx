
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(formData)
      });
      const data = await res.json() 
      //check if the data being returned is false
      if(data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      {/* Sign In heading */}
      <h1 className='text-3xl text-center font-semibold my-7'>SignIn</h1>
      {/* Sign In form */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* Email input */}
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}></input>
        {/* Password input */}
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}></input>
        {/* Sign Up button */}
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign In'}</button>
      </form>
      {/* Sign in link */}
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        {/* Link to Sign Up page */}
        <Link to={"/sign-up"}><span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
}