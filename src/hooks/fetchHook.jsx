import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})
  const [status, setStatus] = useState()

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
    console.count('en do Fetch')
  }, [])

  useEffect(() => {
    if (!isLoading) {
      return
    }

    const fetchData = async () => {
      try {
        const res = await axios(url, options)
        setResponse(res.data)
        console.log('set response data')
        setStatus(res.statusText)
        console.log('set status data')
      } catch (err) {
        const data = err.response ? err.response.data : 'Server error'
        setError(data)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [isLoading, options, url])

  return [{ response, error, isLoading, status }, doFetch]
}

export default useFetch
