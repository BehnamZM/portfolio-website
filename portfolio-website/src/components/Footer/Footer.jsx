import styled from "styled-components"
import Logo from "../Logo/Logo"
import { Container, Wrapper } from "../Styles/Styles"

const FooterWrapper = styled(Wrapper)`
background-color: 
  ${(props) => props.theme.colors.bgSecondary};
`

const FooterInner = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  color: white;
  padding: 1rem;

  @media screen and (max-width: 668px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 669px) and (max-width: 991px){ 
    grid-template-columns: repeat(2, 1fr);
}
`
const FooterTitle = styled.h3`
margin-bottom: 1rem;
font-weight: 100;

@media screen and (max-width: 668px) {
  margin-bottom: 5px;
  }
`

const FooterAbout = styled.p`
text-align: justify;
font-weight: 900;
`

const FooterRow = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;

@media screen and (max-width: 668px) {
  align-items: flex-start;
  gap: 25px;
  }
`

const FooterLinks = styled.ul`

`
const FooterItem = styled.li`
list-style: none;

`

const FooterLink = styled.a`
  margin-bottom: 5px;
transition: all .3s ease-out;
cursor: pointer;
font-weight: 900;
color: white;

&:hover{
  color: ${(props) => props.theme.colors.primary};
}
`

const ProjectsLinks = styled.ul`

`

const ProjectItem = styled(FooterItem)`

`

const ProjectLink = styled(FooterLink)`

`


const CopyRight = styled.p`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  color: #c0c0c0;
  background-color: 
  ${(props) => props.theme.colors.bgcopyright};

  @media screen and (max-width: 668px) {
    font-size: 10px;
    padding: 2rem 0;
  }

`

const SvgWrapper = styled.div`
height: 150px;

@media screen and (max-width: 668px) {
    display: none;
  }
`

const StyledSvg = styled.svg`
height: 100%; 
width: 100%;
background-color: 
  ${(props) => props.theme.colors.bgPrimary};
`


const Footer = () => {
  return (
    <>
      <SvgWrapper overflow="hidden">
        <StyledSvg
          preserveAspectRatio="none"
          viewBox="0 0 500 150"
        >
          <path
            fill="#071828"
            d="M-24.04 100.16c515.8 188.49 437.35-155.91 503.95-16.77l29.34 68.09L0 150z"
          ></path>
        </StyledSvg>
      </SvgWrapper>
      <FooterWrapper>
        <Container>
          <FooterInner>
            <FooterRow>
              <FooterTitle>درباره من</FooterTitle>
              <FooterAbout>من بهنام هستم حدود 2 ساله که وارد حوزه برنامه نویسی شدم اول با وردپرس کار کردم و بعدش خیلی جدی وارد دنیای کدزنی شدم هر روز در حال یادگیری تکنولوژی های جدیدم و امیدوارم از نمونه کارهام خوشتون بیاد. </FooterAbout>
            </FooterRow>
            <FooterRow>
              <FooterTitle>دسترسی ها</FooterTitle>
              <FooterLinks>
                <FooterItem>
                  <FooterLink href="#">خانه</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink href="#skills">مهارتهای نرم</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink href="#projects">پروژه های من</FooterLink>
                </FooterItem>
                <FooterItem>
                  <FooterLink href="#contact">ارتباط با من</FooterLink>
                </FooterItem>

                <FooterItem>
                  <FooterLink href="#hardskills">مهارتهای تخصصی</FooterLink>
                </FooterItem>
              </FooterLinks>
            </FooterRow>

            <FooterRow>
              <FooterTitle>پروژه ها</FooterTitle>
              <ProjectsLinks>
                <FooterItem>
                  <ProjectLink 
                  href="http://behnam-ecommerce-website.herokuapp.com/">فروشگاه کشاورزی</ProjectLink>
                </FooterItem>
                <FooterItem>
                  <ProjectLink 
                  href="https://behnam-dashboard-admin.netlify.app/">پنل مدیریت</ProjectLink>
                </FooterItem>
                <FooterItem>
                  <ProjectLink 
                  href="https://behnam-hotel-project.netlify.app/">معرفی هتل</ProjectLink>
                </FooterItem>
                <FooterItem>
                  <ProjectLink href="#">وبسایت شخصی</ProjectLink>
                </FooterItem>
              </ProjectsLinks>
            </FooterRow>
            <FooterRow>
              <FooterTitle>لوگو</FooterTitle>
              <Logo />
            </FooterRow>
          </FooterInner>
        </Container>
        <CopyRight>تمام حقوق این وبسایت برای آقای بهنام زارع مولائی است. 2022</CopyRight>
      </FooterWrapper>
    </>
  )
}

export default Footer