import React, { Component } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { kebabCase } from 'lodash'

import Button from '../components/Button'

//TODO: Make the Lambda Function return a confirmation, so we know it worked
// Add another API request that gets the sessions and place it as options
// Style Form, so it isn't as ugly

export default class WebinarForm extends Component {
    constructor() {
        super();
        this.state = {
            webinarId: '',
            firstNameInput: '',
            lastNameInput: '',
            emailInput: '',
            scheduleInput: '0'
        }

        this.updateFirstNameInput = this.updateFirstNameInput.bind(this);
        this.updateLastNameInput = this.updateLastNameInput.bind(this);
        this.updateEmailInput = this.updateEmailInput.bind(this);
        this.updateScheduleInput = this.updateScheduleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateFirstNameInput(event) {
        this.setState({
            firstNameInput: event.target.value
        });
    }

    updateLastNameInput(event) {
        this.setState({
            lastNameInput: event.target.value
        });
    }

    updateEmailInput(event) {
        this.setState({
            emailInput: event.target.value
        });
    }

    updateScheduleInput(event) {
        this.setState({
            scheduleInput: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {firstNameInput, lastNameInput, emailInput, scheduleInput} = this.state;
        const { webinarId } = this.props;
        fetch(`https://wizardly-aryabhata-7d1959.netlify.com/.netlify/functions/WebinarJam-RegisterForWebinar?webinar_id=${webinarId}&schedule=${scheduleInput}&first_name=${firstNameInput}&last_name=${lastNameInput}&email=${emailInput}`,{
            method: 'GET',
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            }
        })
        .then((res) => {
            if(res.ok) {
                toast.success(`You Successfully registered for ${this.props.title} `, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true
                });
                const postSubmit = (p) => {setTimeout(function() { p(); }, 3000);}
                postSubmit(this.props.postSubmit);
            }
            else {
                toast.error(`Error registering for webinar`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true
                });
            }
        })
        .catch((err) => {
            toast.error(`Error registering for webinar`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true
            });
            console.log(err);
        });
    }

    render() {
        const { title, webinarId } = this.props;
        const formName = kebabCase(`webinar-register-${title}`)+`-${webinarId}`;
        return (
            <form
            name={formName}
            onSubmit={this.handleSubmit}
            >
                <h1>Register for {title}</h1>
                <input type="hidden" name="form-name" value={formName} />
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" onChange={this.updateFirstNameInput} />

                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" onChange={this.updateLastNameInput} />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" onChange={this.updateEmailInput} />

                {/* <label htmlFor="session">Session</label> */}
                <input id="session" name="session" type="hidden" value="0" />
                {/* <select id="session" name="session" type="text" defaultValue="Select a session">
                </select> */}
                {/* <input type="hidden" name="webinarId" value={webinarId}/> */}
                <Button><button>Register</button></Button>
            </form>
        );
    }
}
