import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  CardText,
  CardTitle,
  Card,
  CardActions,
  
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTabs: 0 };
  }
  toggleCategories() {
    if (this.state.activeTabs === 0) {
      return (
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto"}}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/practicaldev/image/fetch/s--cX6HI9gA--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/j71o6fyry39eaz1eyjna.jpg) center / cover",
              }}
            ></CardTitle>

<CardActions border>
              <a
              className='font-color'
                href="https://github.com/Ranjini2020/classroom-app"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Github
              </a>

              <a
                href="https://hugo-classapp.herokuapp.com"
                style={{ marginLeft: 10 }}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Live Demo
              </a>
            </CardActions>
            <hr/>
            <CardText >
              <h5 style ={{color:'#081c15',fontWeight:'bold'}}>Classroom App</h5>
              <p style ={{color:'#e36414'}}>This is a group project.This app is for educators and students,
              where educator can create courses, add lessons and make it
              available to students. Students can enroll into class, view the
              courses they have enrolled and mark the course as completed once
              all lessons activities inside courses are read and understood.</p>
              <h6 style ={{color:'#081c15',fontWeight:'bold'}}>Technologies used</h6>
              <p style ={{color:'#e36414'}}>Node.js || MongoDB || React || Express || HTML/CSS || Bootstrap</p>
            </CardText>
            
           
          </Card>
        </div>
      );
    } else if (this.state.activeTabs === 1) {
      return (
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover",
              }}
            ></CardTitle>
            <CardActions border>
            <a
              className='font-color'
                href="https://github.com/avanidhalgara/google-search-book"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Github
              </a>

              <a
                href="https://google-search-book1.herokuapp.com"
                style={{ marginLeft: 10 }}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Live Demo
              </a>
            </CardActions>
            <hr/>
            <CardText>
              <h5 style={{color:'#118ab2',fontWeight:'bold'}}>Google-search-book</h5>
              <p style={{color:'#0b090a'}}>React-based Google Books Search app. This SPA (Single Page Application) uses [react-router-dom]to navigate, hide and show your React components without changing the route within Express. This app  display books based on user search. Allow user to view, save, and delete books based on query.</p> 
              <h6 style={{color:'#118ab2',fontWeight:'bold'}}>Technologies used</h6>
              <p style={{color:'#0b090a'}}>Node.js || MongoDB || React || Express || HTML/CSS || Bootstrap</p>
            </CardText>
            
            {/* <CardMenu style={{color: '#fff'}}>
                                   <IconButton name="share" />
                               </CardMenu> */}
          </Card>
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover",
              }}
            ></CardTitle>
            <CardActions border>
            <a
              className='font-color'
                href="https://github.com/avanidhalgara/User-Directory"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Github
              </a>

              <a
                href="https://avanidhalgara.github.io/User-Directory/"
                style={{ marginLeft: 10 }}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Live Demo
              </a>
            </CardActions>
            <hr/>
            <CardText>
            <h5 style={{color:'#118ab2',fontWeight:'bold'}}>Employee Directory</h5>
            <p style={{color:'#0b090a'}}> The app takes in a set of random employees from the API Random User Generator (randomuser.me). It stores the random employees in context. The employees are mapped over and displayed in a table format. The user is also able to search by the users first name with the search input.</p>
            <h6 style={{color:'#118ab2',fontWeight:'bold'}}>Technologies used</h6>
              <p style={{color:'#0b090a'}}>Node.js || React || Express || HTML/CSS || Bootstrap</p>
            </CardText>
            
            {/* <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu> */}
          </Card>
        </div>
      );
    } else if (this.state.activeTabs === 2) {
      return (
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW.png) center / cover",
              }}
            ></CardTitle>
            <CardActions border>
            <a
              className='font-color'
                href="https://github.com/avanidhalgara/Note-Taker_mySql"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Github
              </a>

              <a
                href="https://anotetaker.herokuapp.com/"
                style={{ marginLeft: 10 }}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Live Demo
              </a>
            </CardActions>
            
            <CardText>
            <h5 style ={{color:'#fcba04  ',fontWeight:'bold'}}>Note Taker</h5>
            <p style ={{color:'#1d3557'}}>The Note Taker is an app that uses an Express backend to save, retrieve, and delete notes from database MySql. The save icon appears When the user clicks the save icon, the note is added to the database and the list of notes on the left is updated to include the new note.</p>
            <h6 style ={{color:'#fcba04  ',fontWeight:'bold'}}>Technologies used</h6>
              <p style ={{color:'#1d3557 '}}>Node.js || MySQL || Express || HTML/CSS || Bootstrap || Javascript/Jquery || Postman</p>
            </CardText>
            
          </Card>
          <Card shadow={5} style={{ minWidth: "450px"}}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW.png) center / cover",
              }}
            ></CardTitle>

            <CardActions border>
            <a
              className='font-color'
                href="https://github.com/avanidhalgara/Transcript_Creator"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Github
              </a>

              <a
                href="https://still-garden-49563.herokuapp.com"
                style={{ marginLeft: 10 }}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Live Demo
              </a>
            </CardActions>
          
            <CardText>
            <h5 style ={{color:'#fcba04  ',fontWeight:'bold'}}>Transcript-Creator</h5>
            <p style ={{color:'#1d3557 '}}>This app is allow Admin to maintain students database. Also based on student id, admin can enter students' marks and also able to create transcript.</p>
            <h6 style ={{color:'#fcba04  ',fontWeight:'bold'}}>Technologies used</h6>
              <p style ={{color:'#1d3557 '}}>Node.js || MySQL || Express || HTML/CSS || Bootstrap || JavaScript/Jquery || Postman</p>
            </CardText>
           
            
          </Card>
        </div>
      );
    } else if (this.state.activeTabs === 3) {
      return (
        <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://www.ryadel.com/wp-content/uploads/2017/03/html5-js-css3-jquery-logo.png) center / cover",
            }}
          ></CardTitle>
          <CardActions border>
            <a
              className='font-color'
                href="https://github.com/avanidhalgara/Weathe-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Github
              </a>

              <a
                href="https://avanidhalgara.github.io/Weathe-Dashboard/"
                style={{ marginLeft: 10 }}
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Live Demo
              </a>
            </CardActions>
          <CardText>
            <h4 style ={{color:'#fcba04  ',fontWeight:'bold'}}>Weather-Dashboard</h4>
            <p style ={{color:'#0077b6 '}}>Weather Dashboard app shows the 5 days weather outlook for multiple cities so that user can plan a trip accordingly when user search for the city it shows current and future condition for that city and that city is added to the search history. it also shows current weather with the city name, the date, an icon representattion of weather conditions, thetemperature , the humidity , the wind speed, and the UV index. also added new functionality where the temperature is greter than 75 it changs the background image(like fiery or cloudy)</p>
            <h6 style ={{color:'#fcba04 ',fontWeight:'bold'}}>Technologies used</h6>
              <p style ={{color:'#0077b6 '}}>Node.js || Ajax || Express || HTML/CSS || Bootstrap || Javascript/Jquery </p>
          </CardText>
          
        </Card>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTabs={this.state.activeTabs}
          onChange={(tabId) => this.setState({ activeTabs: tabId })}
          ripple
        >
          <Tab>MERN</Tab>
          <Tab>React</Tab>
          <Tab>MySql</Tab>
          <Tab>HTML/CSS/Jquery</Tab>
        </Tabs>
        {/* <section className='projects-grid'> */}
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

        {/* </section> */}
      </div>
    );
  }
}
export default Projects;
