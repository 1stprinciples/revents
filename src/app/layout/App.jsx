import React from 'react';
import { Container } from 'semantic-ui-react';

import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

function App() {

  return ( // Code written within this curve braces is written in JSX (Note: it is not HTML)
    /* Creating a div element with a class of "App" */
    <div className = "App">
      <NavBar/>
      <Container className='main'>
      <EventDashboard />
      </Container>
    </div>
  );
}

export default App;
