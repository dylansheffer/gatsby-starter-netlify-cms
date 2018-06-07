import styled from 'styled-components'

import { colors } from '../style/branding'

const FlexContainer = styled.section`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
`

export default FlexContainer