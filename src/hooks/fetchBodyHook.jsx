import { useState, useEffect } from 'react'

export const useFetchBody = (url, ref, initialValue, method) => {
  // const [data, setData] = useState(initialValue)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState()
  const httpReq = {
    method: method,
    body: JSON.stringify({ initialValue }),
    headers: new Headers({
      'Content-type': 'application/json'
    })
  }
  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const res = await fetch(url, httpReq)
          if (res.ok) {
            setStatus(res.ok)
          }
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      })()
    }
    return () => {
      ref.current = false
    }
  }, [url, ref])
  return { status, error, loading }
}
export default useFetchBody
