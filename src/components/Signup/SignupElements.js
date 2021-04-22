import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Divider } from '@material-ui/core';

export const Divide = styled(Divider)`
    color: #fff;
`

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow-y: scroll;
    background: linear-gradient(
        108deg,
        rgba(1,147,86,1) 60%,
        rgba(10,201,122,1) 100%
    );
`
export const FormWrap = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 20px;
    }
`

export const Form = styled.form`
    background: #010101;
    max-width: 450px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: auto;
    padding: 22px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`

export const FormLabel = styled.label`
    text-transform: uppercase;
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 10px 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 0px;
    font-size: 14px;
`

export const FormButton = styled.button`
    background: #01bf71;
    padding: 10px 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 0px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`

export const FormButtonAlt = styled.button`
    background: #fff;
    padding: 10px 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    border-color: #000;
    border-radius: 0px;
    color: #01bf71;
    font-size: 18px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 1rem;
    color: #fff;
    font-size: 14px;
`
export const PassText = styled.span`
    text-align: left;
    margin-top: -18px;
    margin-bottom: 30px;
    color: #fff;
    font-size: 13px;
`

export const FormH1 = styled.h1`
    margin-bottom: 10px;
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
`

export const FormH3 = styled.h3`
    margin-bottom: 30px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`
export const CloseLink = styled(Link)`
    color: #fff;
    justify-self: flex-end;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    
`
export const CloseIcon = styled.div`
    display: block;
    color: #fff;
`

export const SomeLine = styled.span`
    text-align: center;
    overflow: hidden;
    display: block;
    height: 1px;
    border: 0;
    border-top: 0.5px solid #808080;
    margin-bottom: 1.5em;
    padding: 0 10px;
    color: #fff;

    &:before {
        right: 0.5em;
        margin-left: -50%;
    }

    &:after {
        right: 0.5em;
        margin-left: -50%;
    }
`

export const FacebookIcon = styled(FaFacebookSquare)`
    vertical-align: middle;
    height: 1.5rem;
    float: left;
    margin-left: 1rem;
    color: #3b5998;
`

export const GoogleIcon = styled(FcGoogle)`
    vertical-align: middle;
    height: 1.5rem;
    float: left;
    margin-left: 1rem;
`

export const LinkHover = styled.a`
    text-decoration: none;
    color: #01bf71;

    &:hover {
        text-decoration: underline;
    }
`

export const LogLink = styled(Link)`
    text-decoration: none;
    color: #01bf71;

    &:hover {
        text-decoration: underline;
    }
`

export const PasswordToggleIcon = styled.i`
    position: relative;
    font-size: 18px;
    cursor: pointer;
    top: -38px;
    right: 10px;
    color: #01bf71;
    display: flex;
    justify-self: flex-end;
`

export const FormControl = styled.input`
    padding: 10px 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 0px;
    font-size: 14px;
`