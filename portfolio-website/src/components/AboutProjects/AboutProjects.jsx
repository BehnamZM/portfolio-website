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
                  <SliderProjectTitle>پروژه فروشگاه کشاورزی با ریکت و نودجی اس</SliderProjectTitle>
                  <SliderProjectDes>
                    این پروژه یک وبسایت فروشگاهی به صورت تک صفحه ای کامل به کمک تکنولوژی های روز میباشد و من سعی کردم تا تمام موارد موجود در یک وبسایت کامل در آن وجود داشته باشد با توجه به اینکه در heroku آنلاین شده برای مشاهده باید vpn داشته باشید.(بک اند از api آماده استفاده شده است.)
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
                <SliderImage src={SliderImage1} />
              </AboutProjectsSlider>
            </SwiperSlide>

            <SwiperSlide>
              <AboutProjectsSlider>
                <SliderProjectInfos>
                  <SliderProjectTitle>
                    پروژه معرفی هتل به صورت spa
                  </SliderProjectTitle>
                  <SliderProjectDes>
                    این پروژه معرفی یه هتله که به صورت تک صفحه ای با تکنولوژی های مختلف و به روزی زده شده همچنین برای بک اند از firebase استفاده شده و در netlify آنلاین شده.
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
                <SliderImage src={SliderImage2} />
              </AboutProjectsSlider>
            </SwiperSlide>

            <SwiperSlide>
              <AboutProjectsSlider>
                <SliderProjectInfos>
                  <SliderProjectTitle>
                    پروژه وبسایت شخصی با styled-components
                  </SliderProjectTitle>
                  <SliderProjectDes>
                    این پروژه یه وبسایت شخصیه که به کمک تکنولوژی styled-components زده شده و در netlify آنلاین هست. 
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
                <SliderImage src={SliderImage3} />
              </AboutProjectsSlider>
            </SwiperSlide>

            <SwiperSlide>
              <AboutProjectsSlider>
                <SliderProjectInfos>
                  <SliderProjectTitle>
                    پروژه پنل ادمین با material ui
                  </SliderProjectTitle>
                  <SliderProjectDes>
                    این پروژه یه پنل مدیریت هست که با کتابخونه material ui طراحی شده البته این پروژه ریسپانیسو نیست و در netlify آنلاین شده.
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
                  </ProjectTecList>
                </SliderProjectInfos>
                <SliderImage src={SliderImage4} />
              </AboutProjectsSlider>
            </SwiperSlide>

          </Swiper>
        </AboutProjectInner>
      </Container>
    </AboutProjectWrapper>
  )
}

export default AboutProjects