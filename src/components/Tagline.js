import styled from 'styled-components'

import { colors } from '../style/branding'

const Tagline = styled.p`
    color: ${props => props.color ? props.color : colors.darkText};
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    max-width: 850px;
    margin: auto;
    padding: 20px;

    @media only screen and (min-width: 650px) {
        font-size: 25px;
    }
`

export default Tagline