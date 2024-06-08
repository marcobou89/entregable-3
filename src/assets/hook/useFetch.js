import axios from 'axios'
import { useState } from 'react'

const useFetch = () => {

const [dataApi, setDataApi] = useState()
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)

    const getApi=(url)=>{
        axios.get(url)
        .then(res=>{
            setDataApi(res.data)
            setError(false)
            setLoading(true)
            
            
        })
        .catch(err=>{
            console.log(err)
            setError(true)
        })
        .finally(()=>{
            setTimeout(() => {
                setLoading(false)
            }, 500);

        })

        

    }
    return [dataApi,getApi, error, loading]


}

export default useFetch



