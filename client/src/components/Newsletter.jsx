import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32 px-4'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get the latest blog, new tech, and exclusive news.</p>
      <form className='flex items-center max-w-2xl w-full md:h-12 h-12 mx-auto'>
        <input
          className='flex-1 h-full border border-gray-300 rounded-l-md px-3 text-gray-500 outline-none'
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className='md:px-12 px-6 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-r-md'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter