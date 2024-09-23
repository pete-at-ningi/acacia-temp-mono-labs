import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const OutsideWrapper = styled.div`
  padding: ${(props) => props.theme.spacings.xlarge}
    ${(props) => props.theme.spacings.large};
  background-image: ${(props) =>
    `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.dark} 100%)`};
  opacity: 0.85;
`;

const Section = styled.section`
  position: relative;
`;

const InnerWrapper = styled.div`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  text-align: left;
  width: 100%;
`;

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacings.xlarge};
`;

const Subheading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
  color: ${(props) => props.theme.colors.accent};
`;

const Heading = styled.p`
  margin-top: ${(props) => props.theme.spacings.small};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  max-width: 650px;
  margin: auto;
`;

const TestimonialGrid = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    display: grid;
    gap: ${(props) => props.theme.spacings.large};
  }
`;

const TestimonialList = styled.div`
  grid-template-columns: repeat(1fr);
  grid-auto-rows: auto;
  display: grid;
  gap: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.desktop} {
    display: none;
  }
`;

const TestimonialCard = styled(motion.figure)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borders.radius};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.theme.spacings.large};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TestimonialBody = styled.blockquote`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.grayDark};
`;

const TestimonialAuthorWrapper = styled.figcaption`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.spacings.medium};
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${(props) => props.theme.spacings.medium};
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
`;

const AuthorArea = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.large};
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust timing for each row
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
  };
  
  const Testimonials = ({ config }) => {
    const firstGroup = config.testimonials.slice(
      0,
      Math.ceil(config.testimonials.length / 3)
    );
    const secondGroup = config.testimonials.slice(
      Math.ceil(config.testimonials.length / 3),
      Math.ceil((config.testimonials.length / 3) * 2)
    );
    const thirdGroup = config.testimonials.slice(
      Math.ceil((config.testimonials.length / 3) * 2),
      config.testimonials.length
    );


  return (
    <OutsideWrapper>
      <Section>
        <InnerWrapper>
          <HeadingWrapper>
            <Subheading>{config.subheading}</Subheading>
            <Heading>{config.heading}</Heading>
          </HeadingWrapper>
          <TestimonialGrid>
            <Group
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {firstGroup.map((testimonial, idx) => (
                <TestimonialCard key={idx} variants={cardVariants}>
                  <TestimonialBody>{`“${testimonial.body}”`}</TestimonialBody>
                  <TestimonialAuthorWrapper>
                    <AuthorImage
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                    />
                    <AuthorInfo>
                      <AuthorName>{testimonial.author.name}</AuthorName>
                      <AuthorArea>{testimonial.author.area}</AuthorArea>
                    </AuthorInfo>
                  </TestimonialAuthorWrapper>
                </TestimonialCard>
              ))}
            </Group>
            <Group
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {secondGroup.map((testimonial, idx) => (
                <TestimonialCard key={idx} variants={cardVariants}>
                  <TestimonialBody>{`“${testimonial.body}”`}</TestimonialBody>
                  <TestimonialAuthorWrapper>
                    <AuthorImage
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                    />
                    <AuthorInfo>
                      <AuthorName>{testimonial.author.name}</AuthorName>
                      <AuthorArea>{testimonial.author.area}</AuthorArea>
                    </AuthorInfo>
                  </TestimonialAuthorWrapper>
                </TestimonialCard>
              ))}
            </Group>
            <Group
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {thirdGroup.map((testimonial, idx) => (
                <TestimonialCard key={idx} variants={cardVariants}>
                  <TestimonialBody>{`“${testimonial.body}”`}</TestimonialBody>
                  <TestimonialAuthorWrapper>
                    <AuthorImage
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                    />
                    <AuthorInfo>
                      <AuthorName>{testimonial.author.name}</AuthorName>
                      <AuthorArea>{testimonial.author.area}</AuthorArea>
                    </AuthorInfo>
                  </TestimonialAuthorWrapper>
                </TestimonialCard>
              ))}
            </Group>
          </TestimonialGrid>
        </InnerWrapper>
      </Section>
    </OutsideWrapper>
  );
};

export default Testimonials;
