import React from 'react';

import './App.css';
import {Layout, Navigation, Header, Content, Drawer} from 'react-mdl'
import Main  from './components/main'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/about">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Project</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
              <Link to="/about">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Project</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        <Main/>
        </Content>
    </Layout>
</div>
    </div>
  );
}

export default App;
