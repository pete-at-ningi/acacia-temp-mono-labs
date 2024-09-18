import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.spacings.large};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacings.large};
  text-align: center;
  color: ${(props) => props.theme.colors.dark};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacings.large};
  margin-top: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: ${(props) => props.theme.spacings.medium};
  border-radius: ${(props) => props.theme.borders.radius};
  text-align: center;
`;

const TeamImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: ${(props) => props.theme.borders.radius};
  margin-bottom: ${(props) => props.theme.spacings.medium};
`;

const TeamName = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacings.small};
  color: ${(props) => props.theme.colors.dark};
`;

const TeamTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacings.medium};
  color: ${(props) => props.theme.colors.primary};
`;

const TeamBio = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: ${(props) => props.theme.spacings.large};
  color: ${(props) => props.theme.colors.gray};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacings.medium};

  a {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.large};
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;

const teamMembers = [
  {
    name: 'Ben Hayward',
    title: 'Founder & Managing Director',
    bio: 'Ben has over 20 years of experience in financial planning, specializing in wealth management and retirement strategies.',
    imageUrl: '/ben-hayward.jpg',
    linkedin: 'https://www.linkedin.com/in/ben-hayward',
    email: 'ben@acaciawealth.com',
    phone: '+44 1234 567890',
  },
  {
    name: 'Tyron Edmonds',
    title: 'Financial Planner & Director',
    bio: 'Tyron brings a wealth of knowledge in investment planning and estate management, ensuring clients’ financial futures are secure.',
    imageUrl: '/tyron.jpg',
    linkedin: 'https://www.linkedin.com/in/tyron-edmonds',
    email: 'tyron@acaciawealth.com',
    phone: '+44 1234 567891',
  },
  {
    name: 'Ed Collins',
    title: 'Senior Financial Planner',
    bio: 'Emma has a deep understanding of tax-efficient strategies and helps clients maximize their wealth while minimizing tax liabilities.',
    imageUrl:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIxfHx3b21hbnxlbnwwfHx8fDE2MTYwNjM3MzM&ixlib=rb-1.2.1&q=80&w=400',
    linkedin: 'https://www.linkedin.com/in/emma-collins',
    email: 'emma@acaciawealth.com',
    phone: '+44 1234 567892',
  },
  {
    name: 'Jane Taylor',
    title: 'Investment Strategist',
    bio: 'James is an expert in crafting personalized investment strategies that align with clients’ risk tolerance and long-term goals.',
    imageUrl:
      'https://images.unsplash.com/photo-1564564295391-7f24f26f568b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHx0b3AtZG93bnxlbnwwfHx8fDE2MTYwNjM3OTU&ixlib=rb-1.2.1&q=80&w=400',
    linkedin: 'https://www.linkedin.com/in/james-taylor',
    email: 'james@acaciawealth.com',
    phone: '+44 1234 567893',
  },
  {
    name: 'Lucy Thompson',
    title: 'Client Relationship Manager',
    bio: 'Lucy ensures that every client receives personalized attention and that all aspects of their financial plans are meticulously managed.',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHx3b21hbnxlbnwwfHx8fDE2MTYwNjM4NTU&ixlib=rb-1.2.1&q=80&w=400',
    linkedin: 'https://www.linkedin.com/in/lucy-thompson',
    email: 'lucy@acaciawealth.com',
    phone: '+44 1234 567894',
  },
  {
    name: 'Davina Wilson',
    title: 'Estate Planning Specialist',
    bio: 'David focuses on helping clients secure their legacy through comprehensive estate planning and will writing services.',
    imageUrl:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHx3b21hbnxlbnwwfHx8fDE2MTYwNjM5MDM&ixlib=rb-1.2.1&q=80&w=400',
    linkedin: 'https://www.linkedin.com/in/david-wilson',
    email: 'david@acaciawealth.com',
    phone: '+44 1234 567895',
  },
];

const TeamPage = () => {
  return (
    <PageContainer>
      <Title>Meet Our Team</Title>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <TeamImage src={member.imageUrl} alt={member.name} />
            <TeamName>{member.name}</TeamName>
            <TeamTitle>{member.title}</TeamTitle>
            <TeamBio>{member.bio}</TeamBio>
            <SocialLinks>
              <a href={`mailto:${member.email}`} aria-label='Email'>
                <FaEnvelope />
              </a>
              <a href={`tel:${member.phone}`} aria-label='Phone'>
                <FaPhone />
              </a>
              <a
                href={member.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
            </SocialLinks>
          </TeamMember>
        ))}
      </TeamGrid>
    </PageContainer>
  );
};

export default TeamPage;
