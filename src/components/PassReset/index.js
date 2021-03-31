import React from 'react'
import { Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormH3,
    FormLabel,
    FormInput,
    FormButton,
    Text,
    CloseIcon,
    CloseLink,
    LogLink
} from './PassResetElements';
import { FaTimes } from 'react-icons/fa'

const PassReset = () => {

    return (
        <>
        <Container>
            <FormWrap>
                <FormContent>
                    <Form>
                        <CloseLink to="/">
                            <CloseIcon>
                                <FaTimes />
                            </CloseIcon>
                        </CloseLink>
                        <FormH1>Forgot password?</FormH1>
                        <FormH3>Enter the email address you use on our website. We'll send you a link to reset your password.</FormH3>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" required name="email"/>
                        
                        <FormButton 
                            type="submit" 
                            onClick={() => { console.log('Password reset link has been sent') }}
                        >
                            Reset password
                        </FormButton>
                        <Text>Back to <LogLink to="/signin">Login</LogLink></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default PassReset
