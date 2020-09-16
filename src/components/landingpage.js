import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl'
import Image from '../avani-image1.png'





class LandingPage extends Component{
    render(){
        return(
           <div style={{width:'100%',margin:'auto'}}>
             <Grid className='landing-grid'>
                 <Cell col={12}>
                     <img src ={Image} alt = "avaniImage" className = "avtar-image"/>
                        
                     <div className = 'banner-text'>
                         <h1>Avani Dhalgara</h1>
                         <h1>Full Stack Web Developer</h1>
                         <hr/>
                         <p>HTML5/CSS3 | Javascript | React | Bootstrap | MongoDB | MySQL | Node.js | Express</p>
                         <div className="social-links">
                             <a href ='https://www.linkedin.com/in/avani-dhalgara/' target ='_blank' rel='noopener noreferrer'>
                                 <i className="fa fa-linkedin-square"aria-hidden ='true'/>
                             </a>
                             <a href ='https://github.com/avanidhalgara' target ='_blank' rel='noopener noreferrer'>
                                 <i className="fa fa-github-square mr-50"aria-hidden ='true'/>
                             </a>
                            

                         </div>
                     </div>
                   
                 </Cell>

             </Grid> 
           </div> 
        )
    }
}
export default LandingPage

