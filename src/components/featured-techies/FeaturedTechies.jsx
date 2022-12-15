import React, { useState, useEffect } from 'react'

const url = 'https://starthubconnect.adaptable.app/user/top-members'

const FeaturedTechies = () => {
  const [techies, setTchies] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setTchies(data)
          setIsLoading(false)
        })
    } catch (error) {
      setError(error)
      console.error(error)
    }
  }, [])

  console.log(techies.items );

  if (isLoading) {
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
  }

    //   if (error) {
    //     return (
    //         <div>
    //             <h1>Error</h1>
    //         </div>
    //     )
    //   }

  return (
    <div className='bg-[rgb(16,50,140)] text-center px-[7%] py-[3rem] h-full]'>
      <h1 className='text-white text-[4vmin] font-[400] mb-[1rem]'>
        Featured techies
      </h1>
      <div className='grid grid-cols-6 phone:grid-cols-3 mdm:grid-cols-6'>
        {techies.items.map((techie) => {
          return (
            <div className=' mx-[15%] my-[.7rem]' key={techie.id}>
              <img src={techie.profile_image} alt='' className='rounded-full' />
              <h1 className='text-white font-[500] phone:text-[2vmin] mdm:text-[2.5vmin]'>
                {techie.firstname + ' ' + techie.lastname}
              </h1>
              <p className='text-[#6474A2] phone:text-[1.8vmin] mdm:text-[2.2vmin]'>
                {techie.skill ? techie.skill : 'No skill '}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedTechies
