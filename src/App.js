import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';

const websiteLinks = [
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'About Me',
    path: '/aboutme'
  },
  {
    text: 'Work',
    path: '/work'
  },
  {
    text: 'Pets',
    path: '/pets'
  },
  {
    text: 'Contact',
    path: '/contact'
  },
]; 

function App() {
  return (

  <Router> 
    <div className="App App-header">
        <h1>This is a header</h1>
          <ul>
            {websiteLinks.map((item, index) => {
                            return <li key={index}>
                                <Link to={item.path}>{item.text}</Link>
                                </li>
                             })
                            }
 </ul>

  <Switch>
        <Route path="/:id">
          <RouteParam />
        </Route>
      </Switch>
    

      <Footer />
    </div>
  </Router>  
    
    );
}


function Home() {
  return (
  <h1>Hi and Welcome to Home</h1>
  )
}

function AboutMe() {
  return (
  <h1>This is the About Me page</h1>
  )
}

function Header() {
  return (
  <h1>This is the header</h1>
  )
}

function Nav() {
  return ( 
  <h1>Nav Bar</h1>
  )
}

function MyPets() {
  return (
  <h1>Pets</h1>
  )
}

function MyWork() {
  return (
  <h1>Work</h1>
  )
}

function Contact() {
  return (
  <h1>Contact</h1>
  )
}


function Footer() {
  return (
  <h1>Footer</h1>
  )
}

function RouteParam() {
  const param = useParams();
  return (
    <h1>{param.id}</h1>
  )
}

export default App;
