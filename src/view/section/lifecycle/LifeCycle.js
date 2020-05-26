import React from 'react';
import './LifeCycle.css';
import Discovery from '../../../assets/discovery-white.svg';
import Research from '../../../assets/research-and-project-estimation.svg';
import Wireframe from '../../../assets/wireframe.svg';
import UiApplication from '../../../assets/ui.svg';

export const LifeCycle = () => {
    return (<div className="life-cycle">
    <div className="research">
      <div className="research-image">
        <img src={Research} alt="Research"/>
      </div>
      <h3>2. Research + Project Estimation</h3>
    </div>
    <div className="discovery">
      <div className="discovery-image">
        <img src={Discovery} alt="Discovery"/>
      </div>
      <h3>1. Discovery</h3>
    </div>
    <div className="design-process-description">
      <p>We sit down with you to discuss your business goal and your targer audience. We determine the problem you are trying to solve, and together, we define the key feature of the app/software you are trying to build</p>
    </div>
    <div className="wireframe">
      <div className="wireframe-image">
        <img src={Wireframe} alt="Wireframe"/>
      </div>
      <h3>3. UX Wireframe</h3>
    </div>
    <div className="ui-application">
      <div className="ui-application-image">
        <img src={UiApplication} alt="UiApplication"/>
      </div>
      <h3>4. UI Application</h3>
    </div>

  </div>);
}