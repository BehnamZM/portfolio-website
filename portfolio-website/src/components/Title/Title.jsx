import styled from 'styled-components'
import TitleLogo from '../../assets/title-logo.png'

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const StyledTitleInner = styled.h3`
  color: ${(props) => props.varient === "primary" ? props.theme.colors.primary : props.theme.colors.textOne};
  margin: 10px 0; 
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 668px) {
    font-size: 20px;
  }
`

const TitleImage = styled.img`

`

const Title = (props) => {
  return (
    <StyledTitle>
      <StyledTitleInner varient="primary">{props.title1}</StyledTitleInner>
      <StyledTitleInner>{props.title2}</StyledTitleInner>
      <TitleImage src={TitleLogo} />
    </StyledTitle>
  )
}

export default Title