import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Particles from 'react-particles-js';
import ParticlesOptions from './components/ParticlesOptions/particlesjs-config.json';
import Title from './components/Title/Title';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Particles 
          className='particles'
          params={ParticlesOptions}
        />
        <Navigation className="navigation" onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Title className="title"/>
            </div>
          : (
              route === 'about'
              ? <About onRouteChange={this.onRouteChange} />
              : (
                  route === 'projects'
                  ? <Projects onRouteChange={this.onRouteChange} />
                  : (
                    route === 'contact'
                    ? <Contact onRouteChange={this.onRouteChange} />
                    : this.state
                    )
                )
            )
        }
      </div>
    )
  }
}

export default App;

