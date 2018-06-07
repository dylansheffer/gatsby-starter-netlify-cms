import React from 'react';
import styled from 'styled-components'


const VisuallyHiddenStyle = styled.span`
    position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
`

const VisuallyHidden = (props) => (
    <VisuallyHiddenStyle>
        {props.children}
    </VisuallyHiddenStyle>
)

export default VisuallyHidden;