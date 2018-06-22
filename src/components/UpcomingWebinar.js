import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ReactModal from 'react-modal'

import { colors } from '../style/branding'
import Button from './Button';

const UpcomingWebinarSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: .1em;
        color: ${colors.lightGray};
    }

    h2 {
        text-align: center;
    }
`

export default class UpcomingWebinar extends React.Component {
    componentWillMount() {
        ReactModal.setAppElement('body')
      }

      constructor(props) {
        super(props);

        this.state = {
          showModal: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }

      handleOpenModal () {
        this.setState({ showModal: true });
      }

      handleCloseModal () {
        this.setState({ showModal: false });
      }

      render() {
          const { title, date, ...props } = this.props;

          return (
            <UpcomingWebinarSection>
                <h1>Upcoming Webinar</h1>
                <h2>{title}</h2>
                <time>{date}</time>
                <Button><button style={{margin: "10px auto"}} onClick={this.handleOpenModal}>Register</button></Button>
                {props.children}
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Register for Course"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <Button><button onClick={this.handleCloseModal}>Close Modal</button></Button>
                </ReactModal>
            </UpcomingWebinarSection>
          )
      }
}

