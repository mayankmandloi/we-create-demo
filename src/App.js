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
        <div className="main-parent" data-testid="main-parent">
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
              <Section key="sec-1">
                <VisualDesignImage/>
                <VisualDesignContent/>
              </Section>
               <Section key="sec-2">
                 <DesignProcess/>
               </Section>
              <Section key="sec-3">
                <LifeCycle/>
              </Section>
              <Section key="sec-4">
                <ProductDesign/>
              </Section>
              <Section key="sec-5">
                <UserExperinceDesign/>
              </Section>
              <Section key="sec-6">
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
