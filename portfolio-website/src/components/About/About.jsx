import styled, { keyframes } from 'styled-components'
import { Container, StyledButton, Wrapper } from '../Styles/Styles'
import AboutImage from '../../assets/Notifications_Monochromatic.png'
import Typewriter from 'typewriter-effect';

const AboutWrapper = styled(Wrapper)`
  background-color: 
  ${(props) => props.theme.colors.bgSecondary};
`

const AboutInner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100vh;

  @media screen and (max-width: 668px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
  @media screen and (min-width: 669px) and (max-width: 991px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`
const animate = keyframes`
  0% {
    transform: translateY(-5%);
  }
  50% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(-5%);
  }
`

const AboutImg = styled.img`
  width: 100%;
  flex: 1;
  animation: ${animate} infinite 10s linear;

  @media screen and (max-width: 668px) {
    width: 350px;
  }

  @media screen and (min-width: 669px) and (max-width: 991px) {
    width: 550px;
  }

`



const AboutInfos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 668px) {
    align-items: center;
  }
`

const Introduction = styled.h2`
  color: ${(props) => props.varient === "primary" ?
    props.theme.colors.primary :
    props.theme.colors.light};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};

  @media screen and (max-width: 668px) {
    font-size: ${({ sizeMobile }) => sizeMobile};
    margin-bottom: 5px;
  }

`

const AboutButton = styled(StyledButton)`
  margin-top: 25px;
`

const About = () => {
  return (
    <AboutWrapper>
      <Container>
        <AboutInner>
          <AboutImg src={AboutImage} />
          <AboutInfos>
            <Introduction
              varient="primary"
              weight="100"
              sizeMobile="35px"
              size="50px">سلام، من</Introduction>
            <Introduction
              varient="light"
              weight="100"
              sizeMobile="25px"
              size="40px">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('بهنام زارع مولائی')
                    .start()
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true
                }}
              />
            </Introduction>
            <Introduction
              varient="primary"
              weight="900"
              sizeMobile="20px"
              size="40px">توسعه دهنده فرانت اند هستم.</Introduction>
              <a href='../../assets/behnamzaremolaee.pdf' download>
              <AboutButton>دانلود رزومه</AboutButton>
              </a>
          </AboutInfos>
        </AboutInner>
      </Container>
    </AboutWrapper>
  )
}

export default About