

import Intro from './Intro';
import { useState}  from 'react'
import BlackWave  from './BlackWave';
import GreyWave from'./GreyWave';
import Home  from './Home';
import Nav  from './Nav';
import About  from './About';
import Project  from './Project';
import Contact  from './Contact';
import Certificate from './Certificate';


function App() {

  const [hidden, setHidden] = useState(true);
  const getScroll = (data: boolean) => setHidden(data);


 

  return (
    <>
      <div className="intro" style={{ overflow: hidden ? "hidden" : "visible", height: hidden ? "100vh" : "auto" }}>
      
      <Intro getScroll={getScroll} />
      <Nav/>
      <Home/>
      <BlackWave/>
      <About/>
      <GreyWave/>
      <Project/>
      <BlackWave/>
      <Certificate/>
      <GreyWave/>
      <Contact/>
      </div>
    </>
  );
}

export default App;