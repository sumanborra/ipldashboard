import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/LatestMatch'
import './App.css'

const App = () => {
  return (
    <>
      <Home />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
    </>
  )
}
export default App
