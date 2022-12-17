import React, { useState, useEffect } from 'react'

const url = 'https://jsonplaceholder.typicode.com/photos'
const Techies = () => {
  const [techies, setTchies] = useState([])

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const userData = data.slice(0 - 70)
          setTchies(userData)
          console.log(userData)
        })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className='bg-[rgb(16,50,140)] text-center px-[7%] py-[3rem] h-full]'>
      <h1 className='text-white text-[4vmin] font-[400] mb-[1rem]'>
        Featured techies
      </h1>
      <div className='grid grid-cols-6 '>
        {techies.map((techie) => {
          return (
            <div className=' mx-[15%] my-[.7rem]' key={techie.id}>
              <img src={techie.url} alt='' className='rounded-full' />
              <h1 className='text-white font-[500] phone:text-[2vmin] md:text-[2.5vmin]'>
                John Philip
              </h1>
              <p className='text-[#6474A2] phone:text-[1.8vmin] md:text-[2.2vmin]'>
                {techie.id}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Techies
