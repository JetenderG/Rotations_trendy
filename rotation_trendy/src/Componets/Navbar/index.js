import {React} from 'react';
import {BrowserRouter as Router,
Route,Routes,
Link,
BrowserRouter
} from "react-router-dom"; 
import "./style.css"
export default function Navbar ({pages}) {


    return(
            <BrowserRouter>
        
            <div className='NavBar-Container'>
                <nav>
                    <ul className='listedLinks'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                        <Link to="/Who_we_Are">Who We Are</Link>

                        </li>
                        
                        <li>
                        <Link to="/Pricing">Pricing</Link>

                        </li>
                        
                        <li>
                        <Link to="Contact">Contact</Link>

                        </li>
                </ul>

         <Routes>          

                  
            <Route path={'/'} element =  {pages[0]}/>
            <Route path='/Who_we_are' element ={pages[1]} />
            <Route path={'/Pricing'} element =  {pages[2]}/>
            <Route path={'/Contact'} element =  {pages[3]}/>
               
   

                  

             


 
               
  </Routes>
                </nav>
            </div>
      

            </BrowserRouter>
    )


}