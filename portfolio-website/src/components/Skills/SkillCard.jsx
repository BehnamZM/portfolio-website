import styled from "styled-components"


const StyledCardProgress = styled.div`
  height: 2px;
  width: 90px;
  background-color: 
  ${(props) => props.theme.colors.bgSecondary};
  transition: all .3s ease-out;

`

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  &:hover ${StyledCardProgress}{
    width: 130px;
    background-color: 
  ${(props) => props.theme.colors.primary};
  }

`

const StyledCardIcon = styled.img`
  width: 80px;
`

const StyledCardTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;
`



const StyledCardDes = styled.div`
  text-align: justify;
  color: ${(props) => props.theme.colors.textOne};
  font-weight: bold;
`



const SkillCard = (props) => {
  return (
    <StyledCard>
      <StyledCardIcon src={props.image} />
      <StyledCardProgress />
      <StyledCardTitle>{props.title}</StyledCardTitle>
      <StyledCardDes>{props.des}</StyledCardDes>
    </StyledCard>
  )
}

export default SkillCard