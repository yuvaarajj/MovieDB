import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './components/Home'
import TopRated from './components/TopRated'
import Upcoming from './components/Upcoming'
import './App.css'

// write your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/top-rated" component={TopRated} />
      <Route exact path="/upcoming" component={Upcoming} />
    </Switch>
  </BrowserRouter>
)

export default App
