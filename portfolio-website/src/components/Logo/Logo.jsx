import styled from 'styled-components'
import LogoImg from '../../assets/Face Scan_Flat.png'

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`

const LogoImage = styled.img`
  width: 70px;

  @media screen and (max-width: 668px) {
    width: 50px;
}
`

const LogoName= styled.h3`
  color: 
  ${(props) => props.theme.colors.primary};
  font-size: 20px;
  font-family: 'Pacifico', cursive;

  @media screen and (max-width: 668px) {
    font-size: 15px;
}
`

const Logo = () => {
  return (
    <StyledLogo>
      <LogoImage src={LogoImg}/>
      <LogoName>BZMDESIGN</LogoName>
    </StyledLogo>
  )
}

export default Logo