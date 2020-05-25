import React from 'react';
import  Discovery from './assets/discovery-white.svg';
import  Research from './assets/research-and-project-estimation.svg';
import  Wireframe from './assets/wireframe.svg';
import  UiApplication from './assets/ui.svg';
import {Header} from './view/header/Header'
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import FormConnector from './view/form/FormConnector';

function App() {
  const store = createStore(reducers)
  return (
    <Provider store={store}>
    <div className="main-parent">
      <Header></Header>
      <div className="left-section2">
      </div>
      <div className="right-section2">
        <h2>More then visual design, more then interactions</h2>
        <p>Implement/design below page with css(don’t use bootstrap) and React-Redux. Make fake api calls with waiting of 2-3 seconds and after that return hardcoded data. Page design should be mobile friendly.  </p>
      </div>
      <div className="design-process">
        <h2>Our Design Process</h2>
        <p>Every decision we make is informed and goal oriented with the user journey in mind Designing with a</p>
      </div>
      <div className="life-cycle">
      <div className="research">
          <div className="research-image">
            <img src={Research}></img>
          </div>
          <h3>2. Research + Project Estimation</h3>
        </div>  
        <div className="discovery">
          <div className="discovery-image">
            <img src={Discovery}></img>
          </div>
          <h3>1. Discovery</h3>
        </div>  
        <div className="design-process-description">
          <p>We sit down with you to discuss your business goal and your targer audience. We determine the problem you are trying to solve, and together, we define the key feature of the app/software you are trying to build</p>
        </div>
        <div className="wireframe">
          <div className="wireframe-image">
            <img src={Wireframe}></img>
          </div>
          <h3>3. UX Wireframe</h3>
        </div>
        <div className="ui-application">
          <div className="ui-application-image">
            <img src={UiApplication}></img>
          </div>
          <h3>4. UI Application</h3>
        </div>
        
      </div>
    <div className="product-design-service">
      <h1>Product Design Service</h1>
      <div className="product-design-service-item">
        <h4>User Experince Design</h4>
      </div>
      <div className="product-design-service-item">
        <h4>Visual Design</h4>
      </div>
      <div className="product-design-service-item">
        <h4>Prototyping</h4>
      </div>
      <div className="product-design-service-item">
        <h4>Content Design</h4>
      </div>
      <div className="product-design-service-item">
        <h4>Design System</h4>
      </div>
      <div className="product-design-service-item">
        <h4>Voice, Chatbot & multimodal UI </h4>
      </div>
    </div>
    <div className="left-section1">
        <h2>User Experince Design</h2>
        <p>Implement/design below page with css(don’t use bootstrap) and React-Redux. Make fake api calls with waiting of 2-3 seconds and after that return hardcoded data. Page design should be mobile friendly.  </p>
      </div>
    <div className="right-section3"></div>
    <div className="left-section4">
      </div>
      <div className="right-section2">
        <h2>visual design</h2>
        <p>Implement/design below page with css(don’t use bootstrap) and React-Redux. Make fake api calls with waiting of 2-3 seconds and after that return hardcoded data. Page design should be mobile friendly.  </p>
      </div>
    </div>
    </Provider>
  );
}

export default App;
