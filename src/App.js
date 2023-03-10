import React, { Component } from 'react'
import firebase from './firebase'

export class App extends Component {
  handleClick=()=>{
    let recaptcha = new firebase.auth.RecaptchaVarifier('recaptcha');
    let number = '+975 17947964';
    firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
      let code = prompt('enter the otp','');
      if(code == null)
        return;
      e.confirm(code).then(function(result){
          console.log(result.user,'user');
          document.querySelector('label').textContent=result.user + "Number Verified";

      }).catch((error)=>{
        console.log(error)
      })
    })
  }
  render() {
    return (
      <div>
      <label></label>
        <button onclick={this.handleClick}>
          Click here
        </button>
      </div>
    )
  }
}

export default App