import React, { Component } from 'react';

import {

    Grid,
    Cell

  } from "react-mdl";

class About extends Component{
    render(){
        return(
            <div  className='contact-body'style ={{marginTop:'20px'}}>
            <Grid className='contact-grid'>
               <Cell col={12}>
               <h3 style={{color:'white'}}>About Me</h3>
                  <hr/>                
                  <p  style={{color:'white',textAlign:'left',fontSize:'15px'}}>I am a dedicated and efficient full stack developer in application layers,presentation layers, and database management. I graduated from University of Minnesota Coding Boot Camp and proficient in both front-end and back-end technologies I have developed web applications such as front-end user interface and back end.</p>
                  <p style={{color:'white',textAlign:'left',fontSize:'15px'}}>My objective is to be the creative web developer that i can be and to contribute to the Information Technology industry all that i know and can do.</p>
                   <p style={{color:'white',textAlign:'left',fontSize:'15px'}}>I have proficiencies in HTML, CSS, JavaScript and skilled with SQL. I also have a solid foundation in MongoDB, Express,React and Node.JS. In addition to work experience in Wells Fargo as a Loan Document Specialist and Freelance Tutor.</p>
                
               </Cell>        
           
                
      </Grid>
      </div>
      
        )
    }
}
export default About

