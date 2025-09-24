import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import MuxPlayer from '@mux/mux-player-react';

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
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacings.large};
  margin-top: ${(props) => props.theme.spacings.large};

  /* Center the 5th item when there are 5 members */
  > *:nth-child(5) {
    grid-column: 1 / -1;
    max-width: 50%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr 1fr;

    /* On tablet, still center the 5th item */
    > *:nth-child(5) {
      grid-column: 1 / -1;
      max-width: 50%;
      margin: 0 auto;
    }
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;

    /* On mobile, all items are full width */
    > *:nth-child(5) {
      grid-column: 1;
      max-width: 100%;
      margin: 0;
    }
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
  height: 400px;
  object-fit: cover;
  border-radius: ${(props) => props.theme.borders.radius};
  margin-bottom: ${(props) => props.theme.spacings.medium};
`;

const TeamName = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: 0;
  color: ${(props) => props.theme.colors.dark};
`;

const TeamDesignation = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  margin: 0;
  color: ${(props) => props.theme.colors.gray};
`;

const TeamTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacings.medium};
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
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

const VideoContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: ${(props) => props.theme.borders.radius};
  overflow: hidden;
  margin-bottom: ${(props) => props.theme.spacings.medium};

  mux-player {
    width: 100%;
    height: 100%;
    --media-object-fit: cover;
    --media-object-position: center;
  }
`;

const teamMembers = [
  {
    name: 'Tyron Edmonds',
    title: 'Managing Director',
    bio: 'Tyron is a Chartered Financial Analyst and Chartered member of the MSCI. He has been responsible for leading established wealth management companies in the capacity of COO and CFO.',
    imageUrl: '/tyron_edmonds_min.jpg',
    linkedin:
      'https://www.linkedin.com/in/tyron-edmonds-cfa-chartered-msci-15696415/',
    email: 'tyron.edmonds@acaciawealth.co.uk',
    designation: 'CFA Chartered MSCI',
  },
  {
    name: 'Ben Hayward',
    title: 'Wealth Adviser & Director',
    bio: 'Ben is a fully qualified wealth adviser who served in the British military and worked for a leading insurance broker before starting his career as an adviser. Prior to joining Acacia Wealth, he was an advisor with a FTSE100 wealth management company.',
    imageUrl: '/ben_hayward_min.jpg',
    linkedin: 'https://www.linkedin.com/in/ben-hayward-dip-pfs-2b669913/',
    email: 'ben.hayward@acaciawealth.co.uk',
    designation: 'Dip PFS',
  },
  {
    name: 'Jolanta Filipek',
    title: 'Chartered Financial Planner',
    bio: 'Jolanta is a Chartered Financial Planner who specialises in providing bespoke financial planning and investment advice to busy professionals. In her previous roles she has helped high-net worth individuals to protect and growth their wealth.',
    imageUrl: 'jolanta.JPG',
    linkedin:
      'https://www.linkedin.com/in/yola-filipek-cfp%E2%84%A2-chartered-mcsi-29215a13/',
    email: null,
    designation: 'CFP™ Chartered MCSI',
  },
  {
    name: 'Priyanshu Thakkar',
    title: 'Data and Investment Analyst',
    bio: 'Priyanshu holds an MSc in Finance Analytics and specialises in data analysis and investment research. He has prior experience in wealth management as a research analyst in international financial markets',
    imageUrl: '/priyanshu_thakkar_min.jpg',
    linkedin: 'https://www.linkedin.com/in/priyanshu-thakkar-883799142/',
    email: 'priyanshu.thakkar@acaciawealth.co.uk',
    designation: 'MSc Finance Analytics',
  },
  {
    type: 'video',
    playbackId: 'wnbp1ZpE026aaGi4KqwMTWYJ1uHIwfc02RtBaMwh00rcKE',
    title: 'Team Introduction',
    name: 'Meet Our Team',
    bio: 'Get to know the people behind Acacia Wealth and discover how we can help you achieve your financial goals.',
  },
];

const TeamPage = () => {
  return (
    <PageContainer>
      <Title>Meet Our Team</Title>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            {member.type === 'video' ? (
              <>
                <VideoContainer>
                  <MuxPlayer
                    playbackId={member.playbackId}
                    metadata={{
                      video_title: member.title,
                      viewer_user_id: 'team-visitor',
                    }}
                    streamType='on-demand'
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </VideoContainer>
                <TeamName>{member.name}</TeamName>
                <TeamBio>{member.bio}</TeamBio>
              </>
            ) : (
              <>
                <TeamImage src={member.imageUrl} alt={member.name} />
                <TeamName>{member.name}</TeamName>
                <TeamDesignation>{member.designation}</TeamDesignation>
                <TeamTitle>{member.title}</TeamTitle>
                <TeamBio>{member.bio}</TeamBio>
                <SocialLinks>
                  {member.email && (
                    <a href={`mailto:${member.email}`} aria-label='Email'>
                      <FaEnvelope />
                    </a>
                  )}
                  {member.phone && (
                    <a href={`tel:${member.phone}`} aria-label='Phone'>
                      <FaPhone />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='LinkedIn'
                    >
                      <FaLinkedin />
                    </a>
                  )}
                </SocialLinks>
              </>
            )}
          </TeamMember>
        ))}
      </TeamGrid>
    </PageContainer>
  );
};

export default TeamPage;
