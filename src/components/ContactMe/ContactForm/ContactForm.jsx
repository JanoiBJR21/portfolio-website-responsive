import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className="name-container">
                <input type="text" name='firstname' placeholder='First Name' />
                <input type="text" name='lastname' placeholder='Last Name' />
            </div>

            <input type="email" name="email" placeholder='Enter your email'/>
            <textarea name="message" placeholder='Enter your message' rows={3}></textarea>

            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm