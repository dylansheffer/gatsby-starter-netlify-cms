import styled from 'styled-components'


const FlexContainer = styled.section`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
`

export default FlexContainer