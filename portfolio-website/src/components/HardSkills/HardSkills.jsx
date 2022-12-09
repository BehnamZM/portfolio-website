import styled from "styled-components"
import { Container, Wrapper } from "../Styles/Styles"
import Title from "../Title/Title"
import SkillCard from "./SkillCard"


const StyledSkillsWapper = styled(Wrapper)`
background-color: 
  ${(props) => props.theme.colors.bgPrimary};
`



const HardSkillInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
  padding: 2rem 0;
`

const HardSkillsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;

  
  @media screen and (max-width: 668px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 669px) and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
`



const HardSkills = () => {

  return (
    <StyledSkillsWapper id="hardskills">
      <Container>
        <HardSkillInner>
          <Title title1="مهارت های " title2="تخصصی" />
          <HardSkillsItems>
            <SkillCard percentage="80" tec="HTML" />
            <SkillCard percentage="80" tec="CSS" />
            <SkillCard percentage="70" tec="JAVASCRIPT" />
            <SkillCard percentage="70" tec="REACT JS" />
            <SkillCard percentage="70" tec="BOOTSTRAP" />
            <SkillCard percentage="60" tec="MATERIAL UI" />
            <SkillCard percentage="80" tec="NPM" />
            <SkillCard percentage="70" tec="GIT" />
            <SkillCard percentage="70" tec="STYLED-COMPONENTS" />
            <SkillCard percentage="60" tec="WEBPACK & BABEL" />
            <SkillCard percentage="70" tec="REDUX" />
            <SkillCard percentage="70" tec="REDUX-THUNK" />
            <SkillCard percentage="60" tec="REDUX-TOOLKIT" />
          </HardSkillsItems>
        </HardSkillInner>
      </Container>
    </StyledSkillsWapper>
  )
}

export default HardSkills