import React from 'react';
import Nav from './components/Nav'
import Main from './components/Main'
import Background from './components/Background';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Main />
      <Background />
      <Skills />
      <Projects 
      title="Lorem Ipsum" 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc lorem, lobortis id tortor id, euismod tristique sapien. Cras finibus pulvinar nunc nec dictum. Donec aliquet rhoncus nunc."/>
      <Footer />
    </div>
  );
}

export default App;
