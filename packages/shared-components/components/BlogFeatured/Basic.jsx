import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  padding-bottom: ${(props) => props.theme.spacings.xlarge};
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacings.medium};
`;

const Header = styled.div`
  margin: 0 auto;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    font-weight: 700;
    color: ${(props) => props.theme.colors.dark};
  }

  p {
    margin-top: ${(props) => props.theme.spacings.small};
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.colors.gray};
  }
`;

const PostsGrid = styled(motion.div)`
  margin-top: ${(props) => props.theme.spacings.xlarge};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${(props) => props.theme.spacings.medium};

  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Post = styled(motion.a)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;
  padding: ${(props) => props.theme.spacings.medium};
  &:hover {
    cursor: pointer;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 250px;
    border-radius: ${(props) => props.theme.borders.radius};
    object-fit: cover;
  }

  div {
    position: absolute;
    inset: 0;
    border-radius: ${(props) => props.theme.borders.radius};
  }
`;

const PostDetails = styled.div`
  margin-top: ${(props) => props.theme.spacings.large};
`;

const DateAndCategory = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.small};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};

  a {
    background-color: ${(props) => props.theme.colors.lightGray};
    padding: ${(props) => props.theme.spacings.small}
      ${(props) => props.theme.spacings.medium};
    border-radius: 50px;
    color: ${(props) => props.theme.colors.grayDark};
    font-weight: 600;
    text-decoration: none;

    &:hover {
      background-color: ${(props) => props.theme.colors.grayLight};
    }
  }
`;

const Title = styled.h3`
  margin-top: ${(props) => props.theme.spacings.medium};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
  position: relative;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.colors.grayDark};
    }
  }
`;

const Description = styled.p`
  margin-top: ${(props) => props.theme.spacings.medium};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
`;

const AuthorInfo = styled.div`
  margin-top: ${(props) => props.theme.spacings.large};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.medium};

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.lightGray};
    object-fit: cover;
  }

  div {
    .name {
      font-size: ${(props) => props.theme.fontSizes.small};
      font-weight: 600;
      color: ${(props) => props.theme.colors.dark};
    }

    .role {
      font-size: ${(props) => props.theme.fontSizes.small};
      color: ${(props) => props.theme.colors.gray};
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.6,
    },
  },
};

const postVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BlogSection = ({ limit = null, config }) => {
  // Use slice and reverse on a copied array to avoid mutating the original content array
  const posts = limit
    ? [...config.content].slice(0, limit).reverse()
    : [...config.content].reverse();

  console.log(limit, config);

  return (
    <Section>
      <Container>
        <Header>
          <h2>{config.featuredIntro}</h2>
          <p>{config.featuredSub}</p>
        </Header>
        <PostsGrid
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.4 }}
        >
          {posts.map((post, postIndex) => (
            <Post
              key={postIndex}
              href={post.route}
              variants={postVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
              }}
              transition={{ duration: 0.05, ease: [0.4, 0, 0.2, 1] }}
            >
              <ImageWrapper>
                <img src={post.image} alt={post.title} />
                <div />
              </ImageWrapper>
              <PostDetails>
                <DateAndCategory>
                  <time dateTime={post.datetime}>{post.date}</time>
                </DateAndCategory>
                <Title>
                  <p>{post.title}</p>
                </Title>
                <Description>
                  {post.description.length > 200
                    ? `${post.description.slice(0, 197)}...`
                    : post.description}
                </Description>
                <AuthorInfo>
                  <img src={post.author.imageUrl} alt={post.author.name} />
                  <div>
                    <div className='name'>{post.author.name}</div>
                    <div className='role'>{post.author.role}</div>
                  </div>
                </AuthorInfo>
              </PostDetails>
            </Post>
          ))}
        </PostsGrid>
      </Container>
    </Section>
  );
};

export default BlogSection;
