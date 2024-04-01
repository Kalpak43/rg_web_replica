import React from 'react'
import "./Form.css"

export default function Form() {
  return (
    <div className="p-4 lg:px-40 md:px-20 py-10 bg-[#dee8f0]">
        <p className='text-center'>To provide your support to our mission of a secular, democratic, just and inclusive India, join the conversation and sign up below,</p>
        <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 my-4'>
            <input type="text" className="block bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='First Name*' required />
            <input type="text" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='Last Name*' required />
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='Phone Number*' required />
            <input type="email" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='Enter Email*' required />
            <input type="text" className="bg-transparent border-b-2 border-black focus:border-[#337ab7] outline-none" placeholder='Pin Code*' required />
            <button type='submit' className="uppercase px-4 py-2 bg-[#337ab7] w-fit place-self-center text-white md:col-start-1 md:col-end-3">Submit</button>
        </form>     
    </div>
  )
}
