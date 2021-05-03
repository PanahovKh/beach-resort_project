import './App.css'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRooom from './pages/SingleRoom'
import Error from './pages/Error'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path ='/'> <Home /> </Route>
        <Route path ='/rooms'> <Rooms /> </Route>
        <Route path ='/rooms/:slug'> <SingleRooom /> </Route>
        <Route path ='*'> <Error /> </Route>
      </Switch>
    </>
  )
}

export default App;
