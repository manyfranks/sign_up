import React from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {

    const toggleHome = () => {
        // scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>React Forms</NavLogo>
                            <MobileIcon onClick={toggle}>
                                <FaBars />
                            </MobileIcon>
                            <NavMenu>
                                <NavItem>
                                    <NavLinks to="footer"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    ></NavLinks>
                                </NavItem>
                            </NavMenu>
                            <NavBtn>
                                <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                            </NavBtn>
                            <NavBtn>
                                <NavBtnLink to='/signin'>Login</NavBtnLink>
                            </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider> 
        </>
    )
}

export default Navbar
