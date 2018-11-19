import React, { Component } from 'react';
import PromotionalHeader from './components/PromotionalHeader';
import Grid from '@material-ui/core/Grid';
import './App.css';
import ResultCard from './components/ResultCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PromotionalHeader/>
        <Grid container spacing={0} justify={"center"} id="content">
          <Grid item xs={12} md={8} lg={6}>
            <ResultCard title="Extreme Programming Competition" data={[
              {name: "Ben B, Yashar D", score: 100.0},
              {name: "Bryce D, Kevin", score: 88.3},
              {name: "Mike B, Mathieu D, Felix L", score: 75.4},
              {name: "Mike O, Morteza A, Brendan M", score: 70.2},
              {name: "Tobi, Erin, Chris", score: 63.9},
              {name: "Matthew F, Jesse S, David R", score: 54.2},
              {name: "Haocheng Y, Minghao W, Joey Z", score: 50.6},
              {name: "Jun L, Brianne O, Darrin F", score: 36.0},
              {name: "Sean H, Tom L, Yaroslav B", score: 20.8},
              {name: "Joseph L, Manseph M", score: 5.0},
              {name: "Joshua C, Daniel E, Eric B", score: 1.3},
              {name: "Flyes H", score: 0.0},
              {name: "William M, Briana T", score: 0.0}
            ]}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
