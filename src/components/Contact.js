import React from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
            <img className='avatar' src={props.avatar} />
            <div className="status">
                <div className='name'>
                    {props.name}
                </div>
                <div className={props.online ? 'status-online' : 'status-offline'}>
                </div>
                {props.online ? 'online' : 'offline'}
            </div>
        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;