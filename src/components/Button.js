import styled from 'styled-components'

import { colors } from '../style/branding'

const small = {
    width: 150,
    height: 45
};
const large = {
    width: 220,
    height: 53
};

const Button = styled.span`
    a, button, input {
        border-radius: 80px;
        width: ${props => props.buttonSize == 'small' ? small.width : large.width}px;
        height: ${props => props.buttonSize == 'small' ? small.height : large.height}px;
        line-height: ${props => props.buttonSize == 'small' ? small.height : large.height}px;
        display: block;
        background-color: ${colors.red};
        color: ${colors.lightText};
        text-align: center;
        text-decoration: none;
        transition: .5s all ease;
        :hover {
            color: ${colors.lightText};
            background-color: ${colors.lightRed};
            text-decoration: underline;
        }
    }

    button, input {
        border: 0;
    }
`

export const FaButton = styled.span`
    a, button, input {
        background-color: transparent;
        color: black;
        -webkit-text-decoration: none;
        text-decoration: none;
        -webkit-transition: .5s all ease;
        transition: .5s all ease;
        :hover {
            color: darkgrey;
        }
    }

    button, input {
        border: 0;
    }
`

export default Button