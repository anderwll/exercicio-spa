import styled from "styled-components";

const WrapperIcons = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5rem;
    background: ${props => props.theme.backgroundColor};
`;

const DivIcons = styled.div`
    width: 25%;
    height: 80%;
    text-align: center;
    font-family: 'Mostserrat', sans-serif;
`;

const Icon = styled.span`
    font-size: 6rem;
    color: ${props => props.theme.primary};
`;

const TitleIcon = styled.h4`
   font-size: 2rem; 
   color: ${props => props.theme.secondary}; 
`;

const TextIcon = styled.p`
    font-size: 1.6rem;
    color: ${props => props.theme.secondary};
`;


export { WrapperIcons, DivIcons, Icon, TitleIcon, TextIcon };