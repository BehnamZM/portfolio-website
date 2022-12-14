import styled from "styled-components"
import { Wrapper, Container } from "../Styles/Styles"
import SliderImage1 from '../../assets/Shopping_Flat.png'
import SliderImage2 from '../../assets/hotel project.jpeg'
import SliderImage3 from '../../assets/portfolio.png'
import SliderImage4 from '../../assets/dashboard.jpeg'
import { ImRadioChecked2 } from 'react-icons/im'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper";



const AboutProjectWrapper = styled(Wrapper)`
  background-color: 
  ${(props) => props.theme.colors.bgSecondary};
`

const AboutProjectInner = styled.div`

`

const AboutProjectsSlider = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  

  @media screen and (max-width: 668px){
    grid-template-columns: 1fr;
  }
`

const SliderProjectInfos = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 2rem;

`

const SliderProjectTitle = styled.h2`
color: ${(props) => props.theme.colors.primary};
font-weight: 900;
text-align: start;

`
const SliderProjectDes = styled.p`
color: ${(props) => props.theme.colors.light};
width: 70%;
text-align: justify;

@media screen and (min-width: 669px) and (max-width: 991px){
  width: 100%;
  font-size: 14px;
}
`

const ProjectTecList = styled.ul`

`

const ProjectTecListItem = styled.li`
color: ${(props) => props.theme.colors.light};
display: flex;
align-items: center;
gap: 5px;
margin-top: 10px;
font-size: 20px;

@media screen and (min-width: 669px) and (max-width: 991px){
  font-size: 10px;
}
`
const SliderImageBox = styled.div`

`

const SliderImage = styled.img`
  width: 100%;
  border-radius: 10px;
`

const ProjectTecListItemIcon = styled(ImRadioChecked2)`
color: ${(props) => props.theme.colors.primary};
`




const AboutProjects = () => {
  return (
    <AboutProjectWrapper>
      <Container>
        <AboutProjectInner>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper">
            <SwiperSlide>
              <AboutProjectsSlider>
                <SliderProjectInfos>
                  <SliderProjectTitle>?????????? ?????????????? ?????????????? ???? ???????? ?? ?????????? ????</SliderProjectTitle>
                  <SliderProjectDes>
                    ?????? ?????????? ???? ???????????? ???????????????? ???? ???????? ???? ???????? ???? ???????? ???? ?????? ???????????????? ?????? ?????? ???????????? ?? ???? ?????? ???????? ???? ???????? ?????????? ?????????? ???? ???? ???????????? ???????? ???? ???? ???????? ?????????? ???????? ???? ???????? ???? ?????????? ???? heroku ???????????? ?????? ???????? ???????????? ???????? vpn ?????????? ??????????.(???? ?????? ???? api ?????????? ?????????????? ?????? ??????.)
                  </SliderProjectDes>
                  <ProjectTecList>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      HTML
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      CSS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      REACT
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      REACT-ICONS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      AXIOS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      SWIPER
                    </ProjectTecListItem>
                  </ProjectTecList>
                </SliderProjectInfos>
                <SliderImageBox>
                  <SliderImage src={SliderImage1} />
                </SliderImageBox>
                
              </AboutProjectsSlider>
            </SwiperSlide>

            <SwiperSlide>
              <AboutProjectsSlider>
                <SliderProjectInfos>
                  <SliderProjectTitle>
                    ?????????? ?????????? ?????? ???? ???????? spa
                  </SliderProjectTitle>
                  <SliderProjectDes>
                    ?????? ?????????? ?????????? ???? ???????? ???? ???? ???????? ???? ???????? ???? ???? ???????????????? ?????? ?????????? ?? ???? ???????? ?????? ?????? ???????????? ???????? ???? ?????? ???? firebase ?????????????? ?????? ?? ???? netlify ???????????? ??????.
                  </SliderProjectDes>
                  <ProjectTecList>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      HTML
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      CSS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      SASS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      REACT
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      FORMIK
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      AXIOS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      REACT-BOOTSTRAP
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      SWIPER
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      SWEETALERT
                    </ProjectTecListItem>
                  </ProjectTecList>
                </SliderProjectInfos>
                <SliderImageBox>
                  <SliderImage src={SliderImage2} />
                </SliderImageBox>
              </AboutProjectsSlider>
            </SwiperSlide>

            <SwiperSlide>
              <AboutProjectsSlider>
                <SliderProjectInfos>
                  <SliderProjectTitle>
                    ?????????? ???????????? ???????? ???? styled-components
                  </SliderProjectTitle>
                  <SliderProjectDes>
                    ?????? ?????????? ???? ???????????? ?????????? ???? ???? ?????? ???????????????? styled-components ?????? ?????? ?? ???? netlify ???????????? ??????. 
                  </SliderProjectDes>
                  <ProjectTecList>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      HTML
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      CSS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      REACT
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      REACT-ICONS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      STYLED-COMPONENTS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      TYPEWRITER-EFFECT
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      SWIPER
                    </ProjectTecListItem>
                    
                  </ProjectTecList>
                </SliderProjectInfos>
                <SliderImageBox>
                  <SliderImage src={SliderImage3} />
                </SliderImageBox>
              </AboutProjectsSlider>
            </SwiperSlide>

            <SwiperSlide>
              <AboutProjectsSlider>
                <SliderProjectInfos>
                  <SliderProjectTitle>
                    ?????????? ?????? ?????????? ???? material ui
                  </SliderProjectTitle>
                  <SliderProjectDes>
                    ?????? ?????????? ???? ?????? ???????????? ?????? ???? ???? ???????????????? material ui ?????????? ?????? ?????????? ?????? ?????????? ?????????????????? ???????? ?? ???? netlify ???????????? ??????.
                  </SliderProjectDes>
                  <ProjectTecList>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      HTML
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      CSS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      REACT
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      REACT-ICONS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      AXIOS
                    </ProjectTecListItem>
                    <ProjectTecListItem>
                      <ProjectTecListItemIcon />
                      MATERIAL UI
                    </ProjectTecListItem>
                  </ProjectTecList>
                </SliderProjectInfos>
                <SliderImageBox>
                  <SliderImage src={SliderImage4} />
                </SliderImageBox>
              </AboutProjectsSlider>
            </SwiperSlide>

          </Swiper>
        </AboutProjectInner>
      </Container>
    </AboutProjectWrapper>
  )
}

export default AboutProjects