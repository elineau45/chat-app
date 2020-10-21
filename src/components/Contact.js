import React from 'react';
import './Contact.css';

const name = "Meghan Martin";
const online = false;
const avatar = "https://randomuser.me/api/portraits/women/47.jpg";

function Contact() {
    return (
        <div className="Contact">
            <img className='avatar' src={avatar} />
            <div className="status">
                <div className='name'>
                    {name}
                </div>
                <div className={online ? 'status-online' : 'status-offline'}>
                </div>
                {online ? 'online' : 'offline'}
            </div>
        </div>
    );
}

export default Contact;
