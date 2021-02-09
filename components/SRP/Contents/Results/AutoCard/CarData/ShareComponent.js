import React, { Component } from 'react'
import styled from 'styled-components'
import {ShareIcon} from './Icons'
import EmailIcon from './envelope.svg'
import FbIcon from './facebook-letter-logo.svg'
import TtIcon from './twitter.svg'
import GplusIcon from './google-plus.svg'

const ShareContainer = styled.div`
`

const ShareLink = styled.a`
    cursor: pointer;
`

const ModalContainer = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
    position: fixed;
    z-index: 9999999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    position: relative;
    padding: 20px;
    border: 1px solid #888;
    min-width: 300px;
    width: 15%;
`

const Title = styled.h5`
    font-size: 22px;
    margin-bottom: 1em;
`

const CloseBtn = styled.a`
    cursor: pointer;
    position: absolute;
    right: 1em;
    top: 1em;
`

const ShareSocialLink = styled.a`
    cursor: pointer;
    display: block;
    margin: 0 auto 1em auto;
    max-width: 65px;
    padding: 0.5em;

    &:hover,
    &:focus {
        background-color: rgba(0,0,0,0.2);
    }
`

class Share extends Component {
    constructor (props) {
        super(props)

        this.state = {
            activeModal: false
        }
    }

    showModal () {
        this.setState({
            activeModal: true
        })
    }

    hideModal () {
        this.setState({
            activeModal: false
        })
    }

    handlePopUp (url) {
        let left = (screen.width / 2) - (400 / 2),
            top = (screen.height / 2) - (300 / 2)

        window.open(
        url,
        '',
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=400,height=300,top=' + top + ',left=' + left
        )

        this.setState({
            activeModal: false
        })

        return false
    }

    render () {
        return (
            <ShareContainer>
                <ModalContainer active={this.state.activeModal}>
                    <ModalContent>
                        <CloseBtn onClick={this.hideModal.bind(this)}>&#10006;</CloseBtn>
                        <Title>Sharing list:</Title>
                        <ShareSocialLink href={"mailto:?subject=" + this.props.title + "&body=" + this.props.title + " https://" + window.location.hostname + this.props.link}>
                            <EmailIcon style={{height: '50px', width: '50px'}} />
                        </ShareSocialLink>
                        <ShareSocialLink onClick={() => this.handlePopUp.bind(this)('https://www.facebook.com/sharer/sharer.php?u=' + encodeURI('https://' + window.location.hostname + this.props.link) + '&quote=' + this.props.title + " https://" + window.location.hostname + this.props.link)}>
                            <FbIcon style={{height: '50px', width: '50px'}} />
                        </ShareSocialLink>
                        <ShareSocialLink  onClick={() => this.handlePopUp.bind(this)('https://twitter.com/intent/tweet?text=' + this.props.title + encodeURI(' https://' + window.location.hostname + this.props.link))}>
                            <TtIcon style={{height: '50px', width: '50px'}} />
                        </ShareSocialLink>
                        <ShareSocialLink onClick={() => this.handlePopUp.bind(this)('https://plus.google.com/share?url=' + encodeURI('https://' + window.location.hostname + this.props.link))}>
                            <GplusIcon style={{height: '50px', width: '50px'}} />
                        </ShareSocialLink>
                    </ModalContent>
                </ModalContainer>
                <ShareLink onClick={this.showModal.bind(this)}>
                    <ShareIcon />
                </ShareLink>
            </ShareContainer>
        )
    }
}

export default Share
