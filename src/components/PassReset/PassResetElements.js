import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1,147,86,1) 60%,
        rgba(10,201,122,1) 100%
    );
`

export const FormWrap = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    position: middle;
    display: flex;
    align-items: center;
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

export const Text = styled.span`
    text-align: center;
    margin-top: 1rem;
    color: #fff;
    font-size: 14px;
`

export const FormH1 = styled.h1`
    margin-bottom: 1rem;
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

export const LogLink = styled(Link)`
    text-decoration: none;
    color: #01bf71;

    &:hover {
        text-decoration: underline;
    }
`