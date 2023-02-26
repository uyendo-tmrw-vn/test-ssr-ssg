import { ApiUrl } from '@api/apiUrl'
import api from '@api/axiosServices'
import { useState } from 'react'
import { useEffect } from 'react'
import { baseURL, handleError } from './Common'

export default function useUser() {
  const [result, setResult] = useState({
    title: 'title test',
    metatitle: 'Meta title test',
    metaDes: 'Meta des test',
  })

  useEffect(() => {
    try {
      api.get(baseURL + ApiUrl.config)
        .then(data => {
          if (data.status === 200) {
            console.log(444, data.data.data);
            setResult({
              metatitle: data.data.data.meta_title,
              metaDes: data.data.data.meta_description,
            })
            // setResConfigData(data.data.data)
          }
        })
    } catch (error) {
      handleError(error)
    }
  }, [])

  return result
}
