import styled from "styled-components";

interface WrapperContentProps {
    reverse?: boolean
}

interface DivImageProps {
    imagem: string
}

const WrapperContent = styled.section<WrapperContentProps>`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${props => props.theme.backgroundColor};
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'}
`;

const DivImage = styled.div<DivImageProps>`
    width: 50%;
    height: 100%;
    background-image: url(${props => props.imagem});
    background-size: cover;
    background-position: center; 
    flex-grow: 0;
`;

const DivText = styled.div`
    width: 50%;
    height: 100%;
    padding: 7rem;
    font-family: 'Mostserrat', sans-serif;
`;

const TitleContent = styled.h4`
    font-size: 2rem; 
    margin-bottom: 1rem;
    color: ${props => props.theme.secondary};
`;

const TextContent = styled.p`
    text-align: justify;
    font-size: 1.6rem;
    color: ${props => props.theme.secondary};
`;

export { WrapperContent, DivImage, DivText, TitleContent, TextContent };