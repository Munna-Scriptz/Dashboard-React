import React from 'react'
import { Link } from 'react-router'

export const Login = () => {
  return (
    <>
    <main>
<div class="flex flex-col items-center justify-center h-screen">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Login</h2>
    <form class="flex flex-col">
      <input type="email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address"/>
      <input type="password" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password"/>
      <div class="flex items-center justify-between flex-wrap">
        <label for="remember-me" class="text-sm text-gray-900 cursor-pointer">
          <input type="checkbox" id="remember-me" class="mr-2"/>
          Remember me
        </label>
        <Link to={'/Resister'} class="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</Link>
        <p class="text-gray-900 mt-4"> Don't have an account? <Link to={'/Resister'} href="#" class="text-sm text-blue-500 -200 hover:underline mt-4">Signup</Link></p>
      </div>
      <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
    </form>
  </div>
</div>

    </main>
    </>
  )
}
