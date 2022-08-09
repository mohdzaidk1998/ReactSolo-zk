import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './myComponents/card/Card';
import Navigation from './myComponents/navbar/Navigation';
import {Container} from "react-bootstrap";
import bgt1 from "../src/images/bg1.f8b07286.svg";
import bgb2 from "../src/images/bg2.85b5bc20.svg";
import bgt3 from "../src/images/bg3.68a2c77c.svg";
import bgb4 from "../src/images/bg4.24b0ca3c.svg";
import './App.css';
function App() {
  return (
    <div className="app">
      <div className="bgonboardimages">
      <img src={bgt1} alt="bgt1" className="bgtleft" />
      <img src={bgb2} alt="bgb2" className="bgbleft" />
      <img src={bgt3} alt="bgt3" className="bgtright" />
      <img src={bgb4} alt="bgb4" className="bgbright" />
        </div>
      <Navigation />
      <Container>
        <Card />
      </Container>
      </div>
  );
}
export default App;
