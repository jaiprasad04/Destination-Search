// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsDetails} = props
  const {imgUrl, name} = destinationsDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
