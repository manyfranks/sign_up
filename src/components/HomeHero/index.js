import React from 'react';
import Image from '../../assets/images/desert.jpg';
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const HomeHero = () => {

    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={Image} type='image/jpg' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Forms with Styled Components</HeroH1>
                <HeroP>
                    Click the links above to SIGN UP or LOGIN
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HomeHero
