import { ApiUrl } from '@api/apiUrl'
import api from '@api/axiosServices'
import { useEffect, useState } from 'react'
import { baseURL, handleError } from './Common'

export default function useUser() {
  // const [result, setResult] = useState({
  //   title: 'title test',
  //   metatitle: 'Meta title test',
  //   metaDes: 'Meta des test',
  // })
  let result = {
    title: null,
    metatitle: null,
    metaDes: null,
  }

  const x=   api.get(baseURL + ApiUrl.config)
        .then(data => {
          if (data.status === 200) {
            // console.log(444, data.data.data);
            result.metatitle = data.data.data.meta_title;
            result.metaDes = data.data.data.meta_description
            // setResConfigData(data.data.data)
            
          }
        })
       
  // const x= callapi()
  console.log({x});
  return x||null
}
