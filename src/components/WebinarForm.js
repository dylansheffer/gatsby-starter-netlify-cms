import React, { Component } from 'react'
import { kebabCase } from 'lodash'
import styled from 'styled-components'

import Button from '../components/Button'

export default class WebinarForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const data = JSON.stringify(new FormData(form));
        console.log(data);

        fetch('https://wizardly-aryabhata-7d1959.netlify.com/.netlify/functions/WebinarJam-RegisterForWebinar?webinar_id=f3b0bbd1ce&schedule=1&first_name=dylan4&last_name=sheffer&email=juroricey@larjem.com',{
            method: 'GET',
            headers: {
                        'user-agent': 'Mozilla/4.0 MDN Example',
                        'content-type': 'application/json'
            }
        })
        // let url = `https://webinar-jam-test.azurewebsites.net/api/HttpTriggerJS1?code=7IznAaIV2aoKrjEq8VtD1m7UsCHy6J4Ya17/ak1oMeXMR5cKZ0myuQ==`

        // data.append("api_key", process.env.WEBINAR_JAM_API_KEY || '');
        // data.append("webinar_id", this.props.webinarId);
        // fetch('https://webinarjam.genndi.com/api/register', {
        //     method: 'POST',
        //     mode: 'cors',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'user-agent': 'Mozilla/4.0 MDN Example',
        //         'content-type': 'application/json'
        //       }
        // });
        // fetch('https://webinar-jam-test.azurewebsites.net/api/HttpTriggerJS1?code=7IznAaIV2aoKrjEq8VtD1m7UsCHy6J4Ya17/ak1oMeXMR5cKZ0myuQ==', {
        //     method: 'GET',
        //     body: JSON.stringify(data),
        //     headers: {
        //                 'user-agent': 'Mozilla/4.0 MDN Example',
        //                 'content-type': 'application/json'
        //     }
        // })
    }

    render() {
        const { title, webinarId } = this.props;
        const formName = kebabCase(`webinar-register-${title}`)+`-${webinarId}`;
        return (
            <form
            name={formName}
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            >
                <h1>Register for {title}</h1>
                <input type="hidden" name="form-name" value={formName} />
                <p hidden>
                    <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                    </label>
                </p>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" />

                <label htmlFor="session">Session</label>
                <select id="session" name="session" type="text" defaultValue="Select a session">
                <input type="hidden" name="webinarId" value={webinarId}/>
                </select>
                <Button><button>Register</button></Button>
            </form>
        );
    }
}
