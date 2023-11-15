import React,{useRef} from 'react'
import xyma from './xyma.png'
import feedback from './feedback.png'
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_paenmzm', 'template_5d0b0tt', form.current, '4DdkxHq2oPpCXdcg5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='feedback'>
    <form ref={form} onSubmit={sendEmail}>
     
      <div className='setting'> 
        <img src={xyma} alt='xyma' className='xyma'></img>
        <div className='form'>
          <input type='text' name='from_name' placeholder='Name'></input>
          <br/><br/>
          <input type='text' name='number' placeholder='Mobile Number'></input><br/><br/>
          <input type='text' name='from_email' placeholder='Email'></input><br/><br/>
          <textarea name='message' placeholder='Comments' cols='25' rows='2'></textarea><br/>
          <button type='submit' className='submitbtn'>Submit</button>
        </div>
      </div>
    </form>
  </div>
    
     
    
  )
}

export default ContactUs
