import React, { useState } from 'react'


const btn_class = "m-5 bg-[#FF851B] w-[150px] h-16 rounded-full hover:scale-110 transition-all text-3xl"

const Selection = () => {
    const [selectedNumber, setSelectedNumber] = useState(3)
  return (
    <div className='w-full h-full flex flex-col justify-center text-black items-center'>
        <div className='flex flex-row'>
            <button onClick={() => setSelectedNumber(3)} className={`${selectedNumber === 3 && "bg-blue-500"} ${btn_class}`}>3</button>
            <button onClick={() => setSelectedNumber(5)} className={`${selectedNumber === 5 && "bg-blue-500"} ${btn_class}`}>5</button>
            <button onClick={() => setSelectedNumber(10)} className={`${selectedNumber === 10 && "bg-blue-500"} ${btn_class}`}>10</button>
        </div>
        <div>
            <button className={`${btn_class}`}>review</button>
            <button className={`${btn_class}`}>new</button>
        </div>
    </div>
  )
}

export default Selection