import React from 'react';
import './Messages.css';
import Message from '../Message/Message'
import ScrollToButtom from 'react-scroll-to-bottom';

 const Messages = ({ messages, name }) => (
     <ScrollToButtom className="messages">
         {messages.map((message, i) => <div key={i}>  <Message message={message} name={name} /> </div>)}
     </ScrollToButtom>
    )

export default Messages;