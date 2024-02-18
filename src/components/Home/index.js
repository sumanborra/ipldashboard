// Write your code here
import {Component} from 'react'
import MatchCard from '../MatchCard'
import './index.css'

class Home extends Component {
  state = {matchCardList: []}

  componentDidMount() {
    this.getMatchCard()
  }

  getMatchCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data.teams)
    const dataList = data.teams
    const updateData = dataList.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({matchCardList: updateData})
  }

  render() {
    const {matchCardList} = this.state
    return (
      <div className="home-page-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="image-logo-ipl"
          />
          <h1 className="heading-ipl-dashboard">IPL Dashboard</h1>
        </div>
        <ul className="list-conainer">
          {matchCardList.map(each => (
            <MatchCard matchCardList={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
