import React from 'react';
import Nav from './components/Nav'
import Main from './components/Main'
import Background from './components/Background';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Background />
      <Skills />
      <Projects 
      title="test" 
      description="test test"/>
      <Projects 
      title="test" 
      description="test test"/>
      {/* Figure out how to handle multiple properties next week */}
    </div>
  );
}

export default App;
