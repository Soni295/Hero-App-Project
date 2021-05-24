export const setDataHero = data => ({
  name: data.name,
  img: data.image.url,
  powerstats: data.powerstats,
  details: {
    fullName: data.biography['full-name'],
    weight: data.appearance.weight[1],
    height: data.appearance.height[1],
    hairColor: data.appearance['hair-color'],
    eyeColor: data.appearance['eye-color'],
    workspace: data.work.base
  },
  id: data.id,
  alignment: data.biography.alignment
})

const onlyNum = string =>
  parseFloat(string.replace(/(\d*\.?d*)(.*)/, '$1'))

const sumStats = (totalStats, {details, powerstats}) => {
  const temp = {
    ...powerstats,
    height: details.height,
    weight: details.weight
  }

  for(const key in temp) {
    temp[key] = totalStats === null
      ? onlyNum(temp[key])
      : onlyNum(temp[key]) + totalStats[key]
  }
  return temp
}

const sortMyStats = ({weight, height, ...stats}, countHero) => {
  weight = Math.floor(weight / countHero) + ' kg'
  height = Math.floor(height / countHero) + ' cm'

  const newOrden = Object
    .keys(stats).sort((a, b) => stats[b] - stats[a])
    .reduce((acc, key) => ({...acc, [key]: stats[key] }), {})
  return {...newOrden, weight, height}
}

export const sortPowerStats = data => {
  if(data[0] === undefined)return null

  const allStats = data.reduce(sumStats, null)
  return sortMyStats(allStats, data.length)
}
