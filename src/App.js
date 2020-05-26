import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { Header } from './view/header/Header'
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import FormConnector from './view/form/FormConnector';
import { Section } from './view/section/Section';
import { VisualDesignImage } from './view/section/visualdesign/VisualDesignImage';
import { VisualDesignContent } from './view/section/visualdesign/VisualDesignContent';
import { DesignProcess } from './view/section/designprocess/DesignProcess';
import { LifeCycle } from './view/section/lifecycle/LifeCycle';
import {ProductDesign} from './view/section/productdesign/ProductDesign';
import { UserExperinceDesign } from './view/section/uxdesign/UserExperinceDesign';
import { VisualDesignSecondaryImage } from './view/section/visualdesignsecondary/VisualDesignSecondaryImage ';
import { VisualDesignSecondaryContent } from './view/section/visualdesignsecondary/VisualDesignSecondaryContent';

function App() {
  const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  return (
    <Router>
      <Provider store={store}>
        <div className="main-parent">
          <Switch>
            <Route path="/form">
              <Header goto='home'></Header>
              <FormConnector></FormConnector>
            </Route>
            <Route path='/home'>
              <Redirect to='/'/>
            </Route>
            <Route path="/">
              <Header goto='form'></Header>
              <Section>
                <VisualDesignImage/>
                <VisualDesignContent/>
              </Section>
               <Section>
                 <DesignProcess/>
               </Section>
              <Section>
                <LifeCycle/>
              </Section>
              <Section>
                <ProductDesign/>
              </Section>
              <Section>
                <UserExperinceDesign/>
              </Section>
              <Section>
                <VisualDesignSecondaryImage/>
                <VisualDesignSecondaryContent/>
              </Section>
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
