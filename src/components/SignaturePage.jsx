import React, { useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import bg from '../assets/bg.png'

const SignaturePage = () => {
  const [sign, setSign] = useState()
  const [url, setUrl] = useState(`${bg}`)
  const handleClear = () => {
    sign.clear()
    setUrl(`${bg}`)
  }
  const handleGenerate = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
  }
  return (
    <>
      <div id="container" className="flex w-full h-screen overflow-hidden bg-gray-800">
        <div className="flex flex-col items-center justify-center w-[55%] py-5">
        <div className='w-full mt-1 mb-4 text-3xl text-center text-white'><h1>Input</h1></div>
          <div className="h-full bg-gray-200 border border-black rounded-2xl w-[90%]">
            <SignatureCanvas
              penColor="black"
              canvasProps={{ width: 685, height: 555, className: 'sigCanvas' }}
              ref={(data) => setSign(data)}
            />
          </div>
          <div className="flex">
            <button
              onClick={handleClear}
              className="p-3 m-3 text-xl text-gray-200 transition-all duration-200 border-2 rounded-2xl border-sky-400 w-36 hover:bg-gray-800 hover:text-sky-400 bg-sky-400"
            >
              Clear
            </button>
            <button
              onClick={handleGenerate}
              className="p-3 m-3 text-xl text-gray-200 transition-all duration-200 border-2 rounded-2xl border-sky-400 w-36 hover:bg-gray-800 hover:text-sky-400 bg-sky-400"
            >
              Submit
            </button>
          </div>
        </div>
        <div className='h-[95vh] w-1 bg-white rounded-3xl my-5'></div>
        <div className="flex flex-col w-[45%] ">
          <div className='w-full mt-1 text-3xl text-center text-white'><h1>Output</h1></div>
          <div className='w-full h-[50vh] p-5'>
            <div className='flex items-center justify-center w-full h-full bg-gray-200 rounded-3xl'>
            <img className='w-52' src={url} alt='This is your output' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignaturePage
