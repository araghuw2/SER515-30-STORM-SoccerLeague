import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import{ init } from 'emailjs-com';
import { Alert } from 'react-alert';

init("user_QTZCB98LDM5l2yKtPDwAe");

function Email() {
    const[toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_9h3s38o',
            'template_kfb68gi',
            toSend,
            'user_QTZCB98LDM5l2yKtPDwAe'
        )

        .then((response) => {
            console.log('SUCCESS', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED', err);
        });
        alert("An email has been sent.")

        
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value});

    };

    return (
        <div>
            <center>
            <h1>Contact</h1>
            <form onSubmit={onSubmit}>
            <div className="form-group">
                <input className="form-control"
                    type='text'
                    name='from_name'
                    placeholder='Name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input className="form-control" 
                    type='text'
                    name='message'
                    placeholder='Message'
                    value={toSend.message}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input className="form-control"
                    type='text'
                    name='reply_to'
                    placeholder='Email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
            </div>
                <h4><button type='submit'>Submit</button></h4>
            </form>
            </center>
        </div>
    )
}

export default Email;