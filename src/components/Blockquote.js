import styled from 'styled-components'

import { colors } from '../style/branding'

const Blockquote = styled.blockquote`
    display: block;
    padding: 15px 20px 15px 40px;
    margin: 0;
    text-align: left;
    position: relative;
    font-size: 1.3em;

    ::before {
        content: "\\201C";
        font-family: Georgia, serif;
        font-size: 40px;
        font-weight: bold;
        color: ${colors.lightGray};
        position: absolute;
        left: 10px;
        top: 5px;
    }
`

export default Blockquote;