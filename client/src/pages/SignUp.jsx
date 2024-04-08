import React from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-7'>

        {/* left div */}
        <div className='flex-1'>
          <Link to="/"
            className='self-center text-4xl font-bold
             dark:text-white px-2 py-1.5 bg-gradient-to-r from-purple-950 via-purple-700 to-blue-500 rounded-3xl text-white'>
            ByteBlog
          </Link>

          <p className='text-sm mt-5'>
            Welcome to Blogbyte, your personal hub for all things tech! Whether you're a tech enthusiast,
            a budding developer, or simply curious about the latest gadgets and trends, you've come to the right place.
          </p>

        </div>

        {/* right div */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
              />
            </div>
            <div>
              <Label value='Your Email' />
              <TextInput
                type='text'
                placeholder='username@gmail.com'
                id='Email'
              />
            </div>
            <div>
              <Label value='Your Password' />
              <TextInput
                type='text'
                placeholder='Password'
                id='Password'
              />
            </div>

            <Button gradientDuoTone='purpleToBlue' type='submit'>
              Sign UP
            </Button>

          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Already have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
