import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import moment from 'moment'
import ColourList from './components/ColourList'
import ColourDetail from './components/ColourDetail'
import useInterval from './components/useInterval'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/base.scss'

const App = () => {
  const [time, setTime] = useState(moment());

  useInterval(() => {
    setTime(moment())
  }, 60000);

  return (
    <Router>
      <div className="App">
        <strong style={{color:'#fff', float:'right'}}>Last Updated at {time.format('LT')}</strong>
        <header className="App-header">
          <h1><Link to="/"><span className='light-style'>ColourLovers.</span> Live.</Link></h1>
        </header>
        <Route exact path="/" component={ColourList} />
        <Route exact path="/:id" component={ColourDetail} />
      </div>
    </Router>
  );
}

export default App;
