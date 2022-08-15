import React, {useState} from 'react';
import {validateEmail} from '../utils/helpers'


export default function Contact() {
  //States set up for email, name message and potential error messages
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [errorCheck, setErrorCheck] = useState('');

  //Monitors which field is being typed in and updates relevant variable through the Set functions
  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

// On pressing submit button this function check for valid email and that a name and message is provided
  const handleContactSubmit = (event) => {
    event.preventDefault();

    if(!validateEmail(email)) {
      setErrorCheck('Email is in Invalid Format');
      return;
    } 

    if( !name || !message ) {
      setErrorCheck('Name and Message must be filled out');
      return
    }
    setEmail('')
    setName('')
    setMessage('')
    setErrorCheck('')
  }

  return (
<div className='package' >
<div id='contact-header' > 
<h2 >Contact</h2>
</div>
<div className='form'>
<form name="contact" method="POST" string="placeholder)">
<div className="form-group form-inline">
<label className="sr-only" htmlFor="inputName">Name</label>
<input type="text" name="name" value={name} onChange ={handleInputChange}className="form-control w-100" id="inputName" placeholder="Name" required/>
</div>
<div className="form-group form-inline">
<label  className="sr-only" htmlFor="inputEmail">Email</label>
<input type="email" name="email" value={email} onChange ={handleInputChange} className="form-control w-100" id="inputEmail" placeholder="Email" required/>
</div>
<div className="form-group">
<label className="sr-only" htmlFor="inputMessage">Message</label>
<textarea value={message} onChange ={handleInputChange} className="message form-control" id="inputMessage" rows="6" placeholder="Message" required></textarea>
</div>
<button type="submit" onClick={handleContactSubmit} className="btn btn-outline-primary px-3 py-2" id='send'>Send</button>
</form>
{errorCheck && (
        <div>
          <p className="error-text">{errorCheck}</p>
        </div>
      )}
</div>

</div>

  );
}