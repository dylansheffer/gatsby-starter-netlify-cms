import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faWindowClose }  from '@fortawesome/fontawesome-free-solid'

import { colors } from '../style/branding'
import Button , { FaButton } from '../components/Button'
import WebinarForm from '../components/WebinarForm'
import VisuallyHidden from '../components/VisuallyHidden'

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
          const { title, date, webinarId, ...props } = this.props;

          return (
            <UpcomingWebinarSection>
                <h1>Upcoming Webinar</h1>
                <h2>{title}</h2>
                <time>{date}</time>
                <Button><button style={{margin: "10px auto"}} onClick={this.handleOpenModal}>Register</button></Button>
                {props.children}
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel={`Register for ${title}`}
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <FaButton><button onClick={this.handleCloseModal}>
                        <VisuallyHidden>Close Modal</VisuallyHidden>
                        <FontAwesomeIcon icon={faWindowClose} size="2x" />
                    </button></FaButton>

                    <WebinarForm title={title} webinarId={webinarId} />
                </ReactModal>
            </UpcomingWebinarSection>
          )
      }
}

