import React from 'react'

const LocationCard = ({info}) => {
  
  return (
    <div className='div_location'>
      <h2>{info?.name}</h2>
      <li>
            <ul><span className='categoria'>Type:</span><span>{info?.type}</span></ul>
            <ul><span className='categoria'>Dimension:</span><span>{info?.dimension}</span></ul>
            <ul><span className='categoria'>Population:</span><span></span>{info?.residents.length}</ul>
      </li>
    </div>
  )
}

export default LocationCard