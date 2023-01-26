import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(project => {return(<BlogCard key={project.id}>
        <Img src={project.image}/>
        <TitleContent>
          <HeaderThree title>{project.title}
            <Hr/>
          </HeaderThree>
        </TitleContent>
        <CardInfo>
          {project.description}
        </CardInfo>
        <div>
          <TitleContent>
            <br/>
            Webiste
          </TitleContent>
          <TagList>
            {projects.map((tag,i)=>(<Tag key={i}>
                {project.tag}
            </Tag>))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={project.visit}>
              Code
          </ExternalLinks>
          <ExternalLinks href={project.source}>
            Source
          </ExternalLinks>
        </UtilityList>
      </BlogCard>)})}
    </GridContainer>
  </Section>
);

export default Projects;