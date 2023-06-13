import React, { useState } from 'react';
import style from './ContactForm.module.css';
import Notification from '../Notification/Notification';

const initialValue = {
  email: '',
  name: '',
  message: '',
}

export default function ContactForm() {
  const [data, setData] = useState(initialValue);
  const [requestStatus, setRequestStatus] = useState(null); // pending, success, error

  const handleInput = (key, value) => {
    setData(current => ({...current, [key]: value})); 
  }

  const setNotificationMessage = (data) => {
    setRequestStatus(data);
  };

  const sendMessageHandler = (e) => {
    e.preventDefault();
    setNotificationMessage({
      title: 'Sending',
      message: 'Sending message...',
      status: 'pending'
    })

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw new Error(res.message);
        }

        setNotificationMessage({
          title: 'Success',
          message: `${res.data.name} your message was successfully sended`,
          status: 'success'
        });
        setData(initialValue);
      })
      .catch((err) => {
        setNotificationMessage({
          title: 'Error',
          message: err.message,
          status: 'error'
        })
      })
      .finally(() => {
        setTimeout(() => {
          setNotificationMessage(null);
        }, 3000);
      })
  }

  return (
    <section className={style.contact}>
      <h1>How can I help you?</h1>
      <form className={style.form} onSubmit={sendMessageHandler}>
        <div className={style.controls}>
          <div className={style.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => handleInput('email', e.target.value)}
              required
            />
          </div>

          <div className={style.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={(e) => handleInput('name', e.target.value)}
              required
            />
          </div>
        </div>

        <div className={style.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            row={5}
            id="message"
            value={data.message}
            onChange={(e) => handleInput('message', e.target.value)}
            required
          />
        </div>

        <div className={style.actions}>
          <button disabled={Boolean(requestStatus)}>Send Message</button>
        </div>
      </form>

      {requestStatus && <Notification notification={requestStatus} />}
    </section>
  )
}
