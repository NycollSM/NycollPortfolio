import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/headercont/header';
import Project from './components/projects/projects';
import Design from './components/design/design';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import CardO from './components/design/CardOverview';
import About from './components/about/about'
import './sass/styles.scss';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Design></Design>
      <CardO></CardO>
      <Project></Project>
      <Skills></Skills>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;