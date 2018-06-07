import styled from 'styled-components'
import Link from 'gatsby-link';

import { colors } from '../style/branding'

const LinkButton = styled(Link)`
    width: 220px;
    border-radius: 80px;
    margin: auto 0 0;
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
    }
`

export default LinkButton