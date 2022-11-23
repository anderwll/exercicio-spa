import styled from "styled-components";

interface BannerProps {
    footer?: boolean
}

const Banner = styled.section<BannerProps>`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${props => props.footer ? '30vh' : '45vh'};
    background-image: url(./assets/images/ocean.jpg);
    background-size: cover;
    background-position: center; 
`;

const TitleBanner = styled.h2`
    color: ${props => props.theme.backgroundColor};
    font-size: 4rem;
    font-family: 'Montserrat', sans-serif;    
`;

export { Banner, TitleBanner };