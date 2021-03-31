import React from 'react';
import { Container,
        FormWrap,
        FormContent,
        Form,
        FormH1,
        FormH3,
        FormLabel,
        FormInput,
        FormButton,
        FormButtonAlt,
        Text,
        PassText,
        CloseIcon,
        CloseLink,
        FacebookIcon,
        GoogleIcon,
        LinkHover,
        Divide,
        SomeLine,
        PasswordToggleIcon,
        FormControl,
        LogLink
} from './SignupElements';
import usePasswordToggle from '../Hooks/usePasswordToggle'
import { FaTimes } from 'react-icons/fa'

const SignUp = () => {

    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

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
                        <FormH1>Sign up</FormH1>
                        <FormH3>Enjoy a free membership<br />to our website</FormH3>
                        <FormLabel htmlFor='name'>Full Name</FormLabel>
                        <FormInput type="text" required placeholder="Enter your full name" name="fullName"/>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" required placeholder="name@email.com" name="email"/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        
                        
                        <FormControl
                            placeholder="Enter your password"
                            type={PasswordInputType}
                        />
                        <PasswordToggleIcon>{ToggleIcon}</PasswordToggleIcon>


                        <PassText>Between 8 and 72 characters</PassText>
                        <FormButton 
                            type="submit" 
                            onClick={() => { console.log('Join button clicked') }}
                        >
                            Join for Free
                        </FormButton>
                        <Divide>or</Divide>
                        <FormButtonAlt type="submit" onClick={() => { console.log('Google button clicked') }}>
                            <GoogleIcon />Continue with Google</FormButtonAlt>
                        <FormButtonAlt type="submit" onClick={() => { console.log('Facebook button clicked') }}>
                            <FacebookIcon />Continue with Facebook</FormButtonAlt>
                        <FormH3>Already a member? <LogLink to='/signin'>Log in</LogLink></FormH3>
                        <SomeLine />
                        <FormH3><LinkHover href="https://somewebsite.com">Sign up with your organization</LinkHover></FormH3>
                        <Text>I accept this brand's <a href="https://somewebsite.com">Terms of Use</a> and <a href="https://somewebsite.com">Privacy Policy.</a><br />Having trouble logging in? <a href="https://somewebsite.com">Get Help</a></Text>
                        <Text>This site is protected by reCAPTCHA Enterprise and<br />the Google <a href="https://somewebsite.com">Privacy Policy.</a> and <a href="https://somewebsite.com">Terms of Service</a> apply.</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignUp
