import styled from "styled-components";

const WrapperFooter = styled.section`
    width: 100%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color:  ${props => props.theme.backgroundColor};
    color:  ${props => props.theme.color};
`;

const DivLinks = styled.div`
    li {
    list-style: none;
    display: inline-flex;
    }
`;

const Links = styled.a`
    text-decoration: none;
    color:  ${props => props.theme.primary};
    font-size: 2.5rem;
    margin: 1rem 1rem;
`;

const Small = styled.small`
     margin-left: 1rem;
     font-size: 1rem;
     color: ${props => props.theme.secondary};
`;

const DivSocialMidia = styled.div``;

export { WrapperFooter, DivLinks, DivSocialMidia, Links, Small };
