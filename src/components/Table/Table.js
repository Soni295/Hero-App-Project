import './style.css'

export const Table = ({data, containerClass=''}) => {
  let table = []

  for(const key in data) {
    table.push(<p key={key+1}>{key}: {data[key]}</p>)
  }

  return<div className={'table '+ containerClass}>{table}</div>
}
