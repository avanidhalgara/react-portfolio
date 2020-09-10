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
  Button,
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
          <Card shadow={5} style={{ minWidth: "450px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/practicaldev/image/fetch/s--cX6HI9gA--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/j71o6fyry39eaz1eyjna.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              <h4>Classroom App</h4>
              This is a group project.This app is for educators and students,
              where educator can create courses, add lessons and make it
              available to students. Students can enrol into class, view the
              courses they have enrolled and mark the course as completed once
              all lesons activities inside courses are read and understood.
            </CardText>
            <CardActions border>
              <a
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
            {/* <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu> */}
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
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live</Button>
            </CardActions>
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
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live</Button>
            </CardActions>
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
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live</Button>
            </CardActions>
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
                  "url(https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW.png) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live</Button>
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
                               <IconButton name="share" />
                           </CardMenu> */}
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
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live</Button>
          </CardActions>
          {/* <CardMenu style={{color: '#fff'}}>
                                   <IconButton name="share" />
                               </CardMenu> */}
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
