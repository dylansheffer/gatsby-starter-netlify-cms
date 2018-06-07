import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
`

export default FlexContainer