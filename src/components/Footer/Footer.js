import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Call
          </LinkTitle>
          <LinkItem href='tel: +201010285141'>
            +201010285141
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href='mailto:amroelzene@gmail.com'>
            amroelzene@gmail.com
          </LinkItem>
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>

        
        </CompanyContainer>
        
      </SocialIconsContainer>

      <SocialContainer>
        <SocialIcons href='https://github.com/AmroElzeiny'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>

        <SocialIcons href='https://www.linkedin.com/in/amr-elzeiny-8aa305214/'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>

        <SocialIcons href='https://www.facebook.com/Amro.Elzeiny.32/'>
          <AiFillFacebook size='3rem'/>
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
