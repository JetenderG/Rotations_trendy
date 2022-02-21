import React from 'react';  
import { render } from 'react-dom';
import PageOne from './Componets/Page_One';
import PageTwo from './Componets/Page_Two';
import PageThree from './Componets/Page_Three';
import PageFour from './Componets/Page_Four';
import Wrapper from './Componets/Wrapper';
import Title from './Componets/Title';
import Cube from './Componets/Cube_Model';
import NavBar from './Componets/Navbar';
import './App.css';
class App extends React.Component {

  render(){

    let pages = [<PageOne/>, <PageTwo/>, <PageThree/>, <PageFour/>];
      return (
<div className="App">
        
<Wrapper>
      <Title/>
      <Cube/>
        <NavBar pages = {pages} ></NavBar>

</Wrapper>

    </div>
  );
  }
  

}

export default App;
