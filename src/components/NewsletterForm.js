import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'

const InputContainer = styled.div`
max-width: 600px;
display: flex;
flex-direction: column;
align-items: center;

@media only screen and (min-width: 510px) {
    display: block;
    margin: 0 auto;
    padding: 60px 30px;
}
`

const Label = styled.label`
    display: inline-block;
    text-align: left;
    margin: 0 10px 20px 0;

    @media only screen and (min-width: 510px) {
        width: 20%;
    }
`

const Input = styled.input`
    display: inline-block;
    width: 75%;
    height: 30px;
    font-size: 1em;
    border: 1px solid #ccc;
    margin: 0 10px 20px 0;
`

const NewsLetterForm = () => (
    <form method="POST" action="https://swiftkick.activehosted.com/proc.php" id="_form_1_"  noValidate>
        <div>
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <InputContainer>
                <Label htmlFor="first-name">First Name:</Label>
                <Input type="text" id="first-name" name="user_first_name"/>

                <Label htmlFor="last-name">Last Name:</Label>
                <Input type="text" id="last-name" name="user_last_name"/>

                <Label htmlFor="mail">Email Address:</Label>
                <Input type="email" id="mail" name="user_mail" />
            </InputContainer>
        </div>

        <Button style={{display:"flex", justifyContent:"center"}}>
            <input type="submit" value="Send me updates"/>
        </Button>
    </form>
)

export default NewsLetterForm;