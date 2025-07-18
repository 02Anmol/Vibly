import React from 'react'
import logo2 from '../assets/logo2.png'

function SignUp() {
const [inputClicked, setInputClicked] = React.useState({
  name: false,
  userName: false,
  email: false,
  password: false,
});

  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-grey-900 flex flex-col justify-center items-center'>
      <div className='w-[90%] lg:max-w-[60%] h-[600px] bg-white rounded-2xl flex justify-center items-center overflow-hidden border-2 border-[#1a1f23]'>
        <div className='w-full lg:w-[50%] h-full bg-white flex flex-col items-center p-[10px] gap-[20px]'>

          <div className='flex gap-[10px] items-center text-[20px] font-semibold mt-[40px]'>
            <span>Signup To</span>
            <img src={logo2} alt="" className='w-[70px]' />
          </div>

          <div className='relative flex items-center justify-start w-[90%] h-[50px] rounded-2xl mt-[30px] border-2 border-black' onClick={()=> setInputClicked({userName: true})}>
          <label htmlFor='' className='text-gray-700 absolute left-[20px] p-[5px] bg-white text-[15px] '>Enter your name</label>
            <input type='text' id='name' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0'/>
          
          </div>

        </div>

        <div className='md:w-[50%] h-full hidden lg:flex justify-center items-center bg-[#000000] flex-col gap-[10px] text-white text-[16px] font-semibold rounded-l-[30px] shadow-2xl shadow-black'>

        </div>
      </div>
    </div>
  )
}

export default SignUp
