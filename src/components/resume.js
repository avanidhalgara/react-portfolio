import React, { Component } from 'react';
import {

    Grid,
    Cell

  } from "react-mdl";
  import Education from './education'
  import Experience from './experience'
  import Technical from './technicalSkill'



class Resume extends Component{
    render(){
        return(
           <div>
               <Grid>
                   <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                        <img src = "../images/avani-image.jpg" alt = "avaniImage"
                            
                            style={{height:'200px'}}/>
                       </div>
                       <h4 style={{paddingTop:'2em',color:'#03045e'}}>Avani Dhalgara</h4> 
                       <h5 style={{color:'#03045e'}}>Full Stack Developer</h5>
                       <hr style={{borderTop:'3px solid #023e8a',width:'90%'}}/> 
                       <p>Full stack developer skilled in designing and developing modern web applications.	Experience in modern frameworks like React, Nodejs, JavaScript, MySQL, MongoDB, HTML, CSS, Bootstrap.</p>    
                       <hr style={{borderTop:'3px solid #023e8a',width:'90%'}}/> 
                       <h6 style={{color:'#03045e'}}>Address:</h6>
                       <p>8734 Alamo Circle,NE</p>
                       <p>Blaine,MN-55449</p>
                       <h6 style={{color:'#03045e'}}>Phone:</h6>
                       <p> (763)772 6837</p>
                       <h6 style={{color:'#03045e'}}>Email: </h6>
                       <p> avanidhalgara01@gmail.com </p>
                       <h6 style={{color:'#03045e'}}>LinkedIn: </h6>
                       <p> https://www.linkedin.com/in/avani-dhalgara/</p>
                       <h6 style={{color:'#03045e'}}>GitHub: </h6>
                       <p> https://github.com/avanidhalgara</p>
                       <h6 style={{color:'#03045e'}}>Resume: </h6>
                       <p> https://drive.google.com/file/d/10zeOg6WBt_ZS34lPlNayBlktlPTLt1oc/view?usp=sharing</p>
                       <hr style={{borderTop:'3px solid #023e8a',width:'90%'}}/> 

                        
                   </Cell>
                   <Cell className='resume-right-col' col={8}>
                       <h4>Education</h4>
                       <Education
                       year='Expected May 2021'
                       schoolName='Associate In Computer Science Degree.(Anoka Ramsey College.) '
                        schoolDescription='It prepares students for entry or advancement in the career field of computer programming and information technology.'/>
                       <Education
                       year='August-2020'
                       schoolName=' Certificate in Full Stack Developer/Coding (University Of Minnesota Bootcamp)'
                        schoolDescription='University of Minnesota Coding Boot Camp is a
                        12-week Full Stack Flex course that gives you the knowledge and skills to build dynamic end-to-end web applications and become a full stack web developer.'/>
                        <Education
                        year='July-2003'
                        schoolName='Bachelor of Science in Botany. (Gujarat University) '
                        //  schoolDescription='Regular study tours, field studies, garden visits and industrial visits to impart knowledge on the basics and applied aspects of the subject. Various hands on trainings and workshops are also arranged for the students from schools and colleges'
                        />
                        <hr style={{borderTop:'3px solid #fefae0',width:'100%'}}/>
                        <h4>Experience</h4> 
                        <Experience
                        startYear='Jan-14 '
                        endYear ='Mar-18'
                        jobName='Tutor (K-4)	 '
                         jobDescription='Helped students aged K-4 to improve Math, English, and Reading skills. Created lesson plans, review worksheets, and practice tests to prepare students for weekly tests.'
                        />
                        <Experience
                        startYear='Jan-09  '
                        endYear ='Mar-11'
                        jobName='Wells Fargo – Loan Document Specialist		 '
                         jobDescription='	As a loan specialist worked with customers and mortgage consultant to facilitate loan document collection, verification, communication with clients all the way to closing the loan.
                         Helped train new team members to learn and understand mortgage processes.'
                          
                        />
                         <hr style={{borderTop:'3px solid #fefae0',width:'100%'}}/>

                     <h4>Technical Skills</h4> 
                     <Technical
                        skill='Javascript'                
                        progress={75}
                          
                        />
                         <Technical
                       skill='HTML/CSS'                
                       progress={90}
                          
                        />
                         <Technical
                        skill='MySQL/MongoDB'                
                        progress={80}
                          
                        />
                         <Technical
                        skill='React'                
                        progress={70}
                          
                        />
                        <Technical 
                        skill='Node.js'                
                        progress ={60}
                          
                        />
                   </Cell>
               </Grid>
               
           </div> 
        )
    }
}
export default Resume

