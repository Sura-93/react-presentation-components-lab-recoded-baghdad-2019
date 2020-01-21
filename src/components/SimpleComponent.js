// Code SimpleComponent Here
import React, { Component } from 'react';
class SimpleComponent extends Component {
    state = {
    moode: happy
      }
      handleClick () => {

     switch (this.state.mood) {
       case "happy":this.setState({
         mood:"sad"
       })
         
         break;
         case "sad":this.setState({
           mood:"happy"
         })
           
           break;
       
         
     }
        
      }
    render() { 
        return ( 
  <div onClick={this.handleClick }> {this.state.mode} </div>
         );
    }
}
 
export default SimpleComponent;