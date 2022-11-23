import React from 'react';
import { Banner, TitleBanner } from '../../components/Banner';
import { DivIcons, Icon, TextIcon, TitleIcon, WrapperIcons } from '../../components/SectionIcons';
import { HiComputerDesktop, HiRectangleStack, HiOutlineCheckCircle } from 'react-icons/hi2'
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { DivImage, DivText, TextContent, TitleContent, WrapperContent } from '../../components/SectionContent';
import { WrapperFooter, DivLinks, DivSocialMidia, Links, Small } from '../../components/Footer';

const Home = () => {
  return (
    <>
        <Banner>
            <TitleBanner>Minha primeira página com ReactJS</TitleBanner>
        </Banner>
        <WrapperIcons>
            <DivIcons>
                <Icon>
                    <HiComputerDesktop/>
                </Icon>
                <TitleIcon>Somente para Desktop</TitleIcon>
                <TextIcon>Vamos aprender, como utilizar um framework.</TextIcon>
            </DivIcons>
            <DivIcons>
                <Icon>
                    <HiRectangleStack/>
                </Icon>
                <TitleIcon>Criado com components</TitleIcon>
                <TextIcon>Utilizando o styled Components.</TextIcon>
            </DivIcons>
            <DivIcons>
                <Icon>
                    <HiOutlineCheckCircle/>
                </Icon>
                <TitleIcon>Fácil aproveitamento</TitleIcon>
                <TextIcon>Estamos no caminho.</TextIcon>
            </DivIcons>
        </WrapperIcons>
        <WrapperContent>
            <DivText>
                <TitleContent>Lorem ipsum</TitleContent>
                <TextContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolor facere nobis ipsum nisi, consequuntur obcaecati culpa ut 
                    unde, neque molestias voluptate. Facilis laboriosam consequatur 
                    cumque tempore! Qui voluptatum placeat dolore. Asperiores et 
                    minus, commodi provident facere doloremque. Inventore tempore 
                    molestias amet iste quo iusto reiciendis fuga explicabo quos sit 
                    distinctio nulla esse maiores dignissimos deserunt doloremque, 
                    officiis voluptates. Nam, sit?
                </TextContent>
            </DivText>
            <DivImage imagem='./assets/images/smartphone.jpg'/>
        </WrapperContent>
        <WrapperContent reverse>
            <DivText>
                <TitleContent>Lorem ipsum</TitleContent>
                <TextContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolor facere nobis ipsum nisi, consequuntur obcaecati culpa ut 
                    unde, neque molestias voluptate. Facilis laboriosam consequatur 
                    cumque tempore! Qui voluptatum placeat dolore. Asperiores et 
                    minus, commodi provident facere doloremque. Inventore tempore 
                    molestias amet iste quo iusto reiciendis fuga explicabo quos sit 
                    distinctio nulla esse maiores dignissimos deserunt doloremque, 
                    officiis voluptates. Nam, sit?
                </TextContent>
            </DivText>
            <DivImage imagem='./assets/images/developer.jpg'/>
        </WrapperContent>
        <WrapperContent>
            <DivText>
                <TitleContent>Lorem ipsum</TitleContent>
                <TextContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Dolor facere nobis ipsum nisi, consequuntur obcaecati culpa ut 
                    unde, neque molestias voluptate. Facilis laboriosam consequatur 
                    cumque tempore! Qui voluptatum placeat dolore. Asperiores et 
                    minus, commodi provident facere doloremque. Inventore tempore 
                    molestias amet iste quo iusto reiciendis fuga explicabo quos sit 
                    distinctio nulla esse maiores dignissimos deserunt doloremque, 
                    officiis voluptates. Nam, sit?
                </TextContent>
            </DivText>
            <DivImage imagem='./assets/images/kid.jpg'/>
        </WrapperContent>
        <Banner footer>
            <TitleBanner>Contato</TitleBanner>
        </Banner>
        <WrapperFooter>
            <DivLinks>
                <nav>
                    <ul>
                        <li><Links href='/'>About</Links></li>
                        <li><Links href='/'>Contact</Links></li>
                        <li><Links href='/'>Terms Of Use</Links></li>
                        <li><Links href='/'>Privacy Politic</Links></li>
                    </ul>
                </nav>
    	        <Small>&copy; Your WebSite 2022. All Rights Reserved.</Small>
            </DivLinks>
            <DivSocialMidia>
                <Links href='/'><BsFacebook/></Links>
                <Links href='/'><BsTwitter/></Links>
                <Links href='/'><BsInstagram/></Links>
            </DivSocialMidia>
            
        </WrapperFooter>
    </>
  );
};

export default Home;
