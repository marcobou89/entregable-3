import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './assets/hook/useFetch';
import LocationCard from './components/LocationCard';
import Residents from './components/Residents';
import './components/LocationCard.css';
import './components/Residents.css';


const idRamdom =  Math.floor(Math.random() * 126)+1
function App() {


 const [location, getApi,err,loading] = useFetch()
 const [numRamdom, setNumRamdom] = useState(idRamdom)
 
 

useEffect(() => {
  
  const url = `https://rickandmortyapi.com/api/location/${numRamdom}`
getApi(url)
  
}, [numRamdom])

const textInput = useRef()

const handleTextInput=(event)=>{
  event.preventDefault()
  setNumRamdom(textInput.current.value.toLowerCase().trim())
  textInput.current.value = ""
}


  return (
    <div className='app'>
      <div className='div_banner'>
      <img className='img_banner' src=".\Img\banner2.png" alt="" />
      {/* <img className='img_letras' src="src\assets\Img\letras.png" alt="" /> */}
      </div>
      {
        loading ? <h2 className='loading'>Loading...</h2>
         :
         <>
        <form className="form_boton" onSubmit={handleTextInput}>
            <input ref={textInput} type="number" />
            <button>Search</button>
        </form>
        {
          err? <h2> ❌Hey! you must provide an id from 1 to 126 🥺</h2> : 
          <>
          <div >
              <LocationCard
              info={location}
              />
          </div>
      <div className='cartas' >
        {
      location?.residents.map((character)=>(
        <Residents
        key={character}
        info={character}
        />
      ))
        }
        </div>
        </>
        }

      </>
      }

      
        
      
    </div>
  )
}

export default App
