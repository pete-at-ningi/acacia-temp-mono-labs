import React from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  padding: ${(props) => props.theme.spacings.xlarge} 0;
  @media ${(props) => props.theme.breakpoints.desktop} {
    padding-top: 100px;
  }
`;

const Section = styled.section`
  background: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(props) => props.theme.spacings.large};
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextContent = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.desktop} {
    margin-bottom: 0;
    margin-right: ${(props) => props.theme.spacings.large};
  }
`;

const SubHeading = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  margin-top: ${(props) => props.theme.spacings.small};
  color: ${(props) => props.theme.colors.dark};
`;

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${(props) => props.theme.spacings.large};
`;

const CTAButton = styled.a`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacings.small}
    ${(props) => props.theme.spacings.large};
  border-radius: ${(props) => props.theme.borders.radius};
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const BadgesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.medium};
  margin: ${(props) => props.theme.spacings.large} 0;
  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: row;
  }
  @media ${(props) => props.theme.breakpoints.desktop} {
    flex-direction: row;
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const BadgeIcon = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.small};
  svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.colors.primary};
  }
`;

const BadgeText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BadgeNumber = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.dark};
`;

const BadgeDescription = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;

const VideoWrapper = styled.div`
  @media ${(props) => props.theme.breakpoints.desktop} {
    margin-top: -100px;
  }
  iframe {
    height: 500px;
    width: 500px;
    border-radius: ${(props) => props.theme.borders.radius};
  }
`;

const TeamSection = ({ config }) => {
  return (
    <OuterWrapper>
      <Section>
        <TextContent>
          <SubHeading>{config.subheading}</SubHeading>
          <Heading> {config.heading}</Heading>
          <Paragraph>{config.paragraph}</Paragraph>
          <BadgesWrapper>
            {config.badges.map((badge, index) => (
              <Badge key={index}>
                <BadgeIcon>
                  <badge.icon aria-hidden='true' />
                  <BadgeNumber>{badge.number}</BadgeNumber>
                </BadgeIcon>

                <BadgeDescription>{badge.description}</BadgeDescription>
              </Badge>
            ))}
          </BadgesWrapper>
          <CTAButton href={config.cta.link}>{config.cta.text}</CTAButton>
        </TextContent>
        <VideoWrapper>
          <iframe
            src={config.videoUrl}
            frameBorder='0'
            allow='autoplay; fullscreen; picture-in-picture'
            allowFullScreen
          ></iframe>
        </VideoWrapper>
      </Section>
    </OuterWrapper>
  );
};

export default TeamSection;
