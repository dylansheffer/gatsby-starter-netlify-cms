import React, { Component } from 'react'
import styled from 'styled-components'

import Button from '../components/Button'

export default class WebinarForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('changed')
        const form = event.target;
        const data = new FormData(form);

        data.append("api_key", process.env.WEBINAR_JAM_API_KEY || '');
        data.append("webinar_id", this.props.webinarId);
        fetch('https://webinarjam.genndi.com/api/register', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
              }
        });
    }

    render() {
        const { title, webinarId } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Register for {title}</h1>

                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />

                <label htmlFor="session">Session</label>
                <select id="session" name="session" type="text" defaultValue="Select a session">
                </select>
                <Button><input type="submit" value="Register" /></Button>
            </form>
        );
    }
}
