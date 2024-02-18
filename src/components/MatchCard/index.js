// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const MatchCard = props => {
  const {matchCardList} = props
  const {id, name, teamImageUrl} = matchCardList
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-items">
        <img src={teamImageUrl} alt="" className="image-match-card" />
        <h1 className="match-card-heading-text">{name}</h1>
      </li>
    </Link>
  )
}
export default MatchCard
