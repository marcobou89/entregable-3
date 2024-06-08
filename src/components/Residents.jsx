import React, { useEffect } from 'react'
import useFetch from '../assets/hook/useFetch'

const Residents = ({info}) => {

    const [residents,getResidents]=useFetch()

useEffect(() => {
  

  getResidents(info)
}, [])



  return (
    
    <div className='card'>
        <article>
            <figure>
                <figcaption>
                    <span className={`circle ${residents?.status}`} />
                    <span>{residents?.status}</span>
                </figcaption>
                <img className="img_character" src={residents?.image} alt="character image" />
            </figure>
            <div className='content_list'>
                <h2 className='h2_name'>{residents?.name}</h2>
                <hr/>
                <ul>
                    <li><span className='categoria'>Specie</span><span>{residents?.species}</span></li>
                    <li><span className='categoria'>Origin</span><span>{residents?.origin.name}</span></li>
                    <li><span className='categoria'>Eppisodes where apper</span><span>{residents?.episode.length}</span></li>
                </ul>
            </div>
        </article>
    </div>

  )
}

export default Residents