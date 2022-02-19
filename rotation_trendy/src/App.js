import React from 'react';  
import { render } from 'react-dom';
import PageOne from './Componets/Page_One';
import PageTwo from './Componets/Page_Two';
import PageThree from './Componets/Page_Three';
import PageFour from './Componets/Page_Four';
import Wrapper from './Componets/Wrapper';
import Title from './Componets/Title';
import Cube from './Componets/Cube_Model';
import './App.css';
class App extends React.Component {
  
  render(){
      return (
<div className="App">
        
<Wrapper>
      <Title/>
      <Cube/>
        <PageOne/>
        <PageTwo/>
        <PageThree/>
        <PageFour/>

</Wrapper>

    </div>
  );
  }
  

}

export default App;
