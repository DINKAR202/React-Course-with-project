import React from 'react'

const TopButtons = () => {

    const cities = [
        {
            id:1,
            title: 'london'
        },
        {
            id:2,
            title: 'Sydney'
        },
        {
            id:3,
            title: 'Tokyo'
        },
        {
            id:4,
            title: 'Toronto'
        },
        {
            id:5,
            title: 'Paris'
        },
    ]

  return (
    <div className='flex items-center justify-content my-6'>
        {
            cities.map((city)=>(
                <button className='text-white text-lg font-medium'>{city.title}</button>
            ))
        }
    </div>
  )
}

export default TopButtons