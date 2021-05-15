import { useState, useEffect } from 'react'
import { axiosInstance } from './superHeroApi'
import axios from 'axios'

const setHero = data => {
   return {
    name: data.name,
    key: data.name,
    img: data.image.url,
    powerstats: data.powerstats,
    details: {
      weight: data.appearance.weight,
      height: data.appearance.height,
      eyeColor: data.appearance['eye-color'],
      hairColor: data.appearance['hair-color'],
      fullName: data.biography['full-name'],
      workspace: data.work.base
    }
  }
}

export const RequestMyHeros = () => {

  const [herosId, setHeroId]= useState(['a', '01', '02', '3'])
  const[heros, setHeros] = useState([])

  useEffect(() => {
    const requests = herosId.reduce((acc, cur) => {
      return [...acc, axiosInstance.get(cur)]
    }, [])

    axios.all(requests)
      .then(responses =>
        responses
          .filter(res => res.data.response === 'success')
          .map(curRequest => setHero(curRequest.data))
      ).then(r => setHeros(r))
      .catch(err => console.log(err))
  }, [])

  return{heros, setHeros}
}
