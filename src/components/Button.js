import styled from 'styled-components'
import Link from 'gatsby-link';

import { colors } from '../style/branding'

const Button = styled.span`
    a, button {
        border-radius: 80px;
        padding: 22px;
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

    a {
        width: 220px;
    }

    button {
        border: 0;
        width: 264px;
    }
`

export default Button