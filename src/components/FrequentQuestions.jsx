import React from 'react'

const FrequentQuestions = () => {
  return (
    <div className='flex flex-col w-[70%] mx-[15%] border h-[40vh]' >
        <p className=' py-[1%] text-center font-[700]  ' >Frequently Asked <span className='text-blue-500  font-[700] ' >Questions</span></p>
        <div className='flex flex-row w-[95%]  h-full border border-red-500 mx-[2.5%]' >
            <div  className='flex flex-col border' >
                <button>Eligibility</button>
                <button>How To Use?</button>
                <button>Terms&Condition</button>
            </div>
        </div>
    </div>
  )
}

export default FrequentQuestions