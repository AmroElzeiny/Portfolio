import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems:"center", color:"white", marginBottom:"20px"}}>
          <DiCssdeck size="3rem"/>
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
      <Link href='#tech'>
          <NavLink>Technology</NavLink>
      </Link>
      </li>
      <li>
      <Link href='#about'>
          <NavLink>About Me</NavLink>
      </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/AmroElzeiny'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>

      <SocialIcons href='https://www.linkedin.com/in/amr-elzeiny-8aa305214/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>

      <SocialIcons href='https://www.facebook.com/Amro.Elzeiny.32/'>
        <AiFillFacebook size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
