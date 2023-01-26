import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My personal Portfolio
      </SectionTitle>
      <SectionText>
        Full of Ambition!
      </SectionText>
      <Button onClick={()=>window.location='mailto:amroelzene@gmail.com'}>
        Message Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;