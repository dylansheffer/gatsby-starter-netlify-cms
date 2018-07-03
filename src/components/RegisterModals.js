import React, { Component } from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faWindowClose }  from '@fortawesome/fontawesome-free-solid'

import Button , { FaButton } from '../components/Button'
import WebinarForm from '../components/WebinarForm'
import VisuallyHidden from '../components/VisuallyHidden'

export class WebinarRegisterModal extends Component {
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
      const { title, webinarId, ...props } = this.props;
    return (
        <ModalContainer>
            <Button><button style={{margin: "10px auto"}} onClick={this.handleOpenModal}>Register</button></Button>
            <ReactModal
            isOpen={this.state.showModal}
            contentLabel={`Register for ${title}`}
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={true}
            >
                <ToastContainer />
                <FaButton><button onClick={this.handleCloseModal}>
                    <VisuallyHidden>Close Modal</VisuallyHidden>
                    <FontAwesomeIcon icon={faWindowClose} size="2x" />
                </button></FaButton>

                <WebinarForm title={title} webinarId={webinarId} postSubmit={this.handleCloseModal} />
            </ReactModal>
        </ModalContainer>
    )
  }
}

const ModalContainer = styled.div`
`
