import styled from 'styled-components'


const FlexContainer = styled.section`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    padding: 60px 0;
`

export default FlexContainer