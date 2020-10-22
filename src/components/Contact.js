import React from 'react';
import './Contact.css';

// function Contact(props) {
//     return (
//         <div className="Contact">
//             <img className='avatar' src={props.avatar} />
//             <div className="status">
//                 <div className='name'>
//                     {props.name}
//                 </div>
//                 <div className={props.online ? 'status-online' : 'status-offline'}>
//                 </div>
//                 {props.online ? 'online' : 'offline'}
//             </div>
//         </div>
//     );
// }

function Contact({ contact }) {
    return (
        <div className="Contact">
            <img className='avatar' src={contact.avatar} />
            <div className="status">
                <div className='name'>
                    {contact.name}
                </div>
                <div className={contact.online ? 'status-online' : 'status-offline'}>
                </div>
                {contact.online ? 'online' : 'offline'}
            </div>
        </div>
    );
}

export default Contact;
