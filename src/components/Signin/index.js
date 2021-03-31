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
} from './SigninElements';
import usePasswordToggle from '../Hooks/usePasswordToggle'
import { FaTimes } from 'react-icons/fa'

const Signin = () => {

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
                        <FormH1>Welcome Back</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type="email" required placeholder="name@email.com" name="email"/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormControl
                            placeholder="Enter your password"
                            type={PasswordInputType}
                        />
                        <PasswordToggleIcon>{ToggleIcon}</PasswordToggleIcon>
                        <PassText><LogLink to="/passreset">Forgot your password?</LogLink></PassText><FormButton 
                            type="submit" 
                            onClick={() => { console.log('Join button clicked') }}
                        >
                            Login
                        </FormButton>
                        <Divide>or</Divide>
                        <FormButtonAlt type="submit" onClick={() => { console.log('Google button clicked') }}>
                            <GoogleIcon />Continue with Google</FormButtonAlt>
                        <FormButtonAlt type="submit" onClick={() => { console.log('Facebook button clicked') }}>
                            <FacebookIcon />Continue with Facebook</FormButtonAlt>
                        <FormH3>New to this site? <LogLink to="/signup">Sign up</LogLink></FormH3>
                        <SomeLine />
                        <FormH3><LinkHover href="https://somewebsite.com">Sign up with your organization</LinkHover></FormH3>
                        <Text>Having trouble logging in? <a href="https://somewebsite.com">Get Help</a></Text>
                        <Text>This site is protected by reCAPTCHA Enterprise and<br />the Google <a href="https://somewebsite.com">Privacy Policy.</a> and <a href="https://somewebsite.com">Terms of Service</a> apply.</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default Signin
