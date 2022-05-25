import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
    console.log('fecheando')
  }, [])

  useEffect(() => {
    if (!isLoading) {
      return
    }

    const fetchData = async () => {
      console.log('en el useffect y fetchData')
      try {
        const res = await axios(url, options)
        setResponse(res.data)
      } catch (err) {
        const data = err.response ? err.response.data : 'Server error'
        setError(data)
      }
      console.log('termino el fetch')
      setIsLoading(false)
    }
    fetchData()
  }, [isLoading, options, url])

  return [{ response, error, isLoading }, doFetch]
}

export default useFetch
