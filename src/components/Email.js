import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import "./Email.css"

const Email = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_k9ed05i', 'template_ybfxghe', form.current, 'Nff1qbL0LVSJYn9T1')
      .then((result) => {
          console.log(result.text);
      }, 
      (error) => {
          console.log(error.text);
      }
    );
    e.target.reset()
  }

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}
      className="form-control">
          {/* <p className='form-container-heading'>Email Us</p> */}
          <input type="text"
          placeholder='Full Name'
          name='user_name' required />
          <input type="email"
          placeholder='Email'
          name='user_email' required />
          <input type="text"
          placeholder='Subject'
          name='subject' required />
          <textarea name="message"
          cols="30" rows="10" />
          <button type='submit'
          className="form-button">Send Message</button>
      </form>
    </div>
  )
}

export default Email