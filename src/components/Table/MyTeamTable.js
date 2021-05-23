import { Table } from './Table'

export const MyTeamTable = ({data}) => {

  const {weight, height, ...rest} = data
  return(
    <div className='power-stats'>
      <h2>{Object.keys(data)[0]} team</h2>
      <Table
        containerClass='total-stats'
        itemClass='stat'
        data={rest}
      />
      <h3>averages</h3>
      <Table
        containerClass='averages'
        itemClass='stat'
        data={{weight, height}}
      />
    </div>
  )
}
