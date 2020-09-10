import React, { Component } from 'react';
import { Cell,Grid,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
           <div className='contact-body'>
               <Grid className='contact-grid'>
                {/* <Cell col={6}>
                <h4>Avani Dhalgara</h4>
                <img src="../images/avani-image.jpg" alt = "avaniImage" 
                style={{height:'250px'}}/>
                </Cell>    */}
              
               
               <Cell col={12}> 
               <h2>Contact Me</h2>
                <hr/>
                <div  className='contact-list'>
                <List>
                    <ListItem>
                        <ListItemContent style={{fontSize:'25px',fontFamily: 'Roboto'}}>
                           <i className='fa fa-phone-square' aria-hidden='true'/>(763)-772-6837
                        </ListItemContent>
                     </ListItem>
                     <ListItem>
                        <ListItemContent style={{fontSize:'25px',fontFamily: 'Roboto'}}>
                           <i className='fa fa-envelope-square' aria-hidden='true'/>avanidhalgara01@gmail.com
                        </ListItemContent>
                     </ListItem>
                     <ListItem>
                         <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                     </ListItem>
                </List>
</div>
               </Cell>
               </Grid>
           </div> 
        )
    }
}
export default Contact

