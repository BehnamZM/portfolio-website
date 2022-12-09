import styled from 'styled-components'
import { Container, StyledButton, Wrapper } from '../Styles/Styles'
import { GiRotaryPhone } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import swal from 'sweetalert'

const ContactWrapper = styled(Wrapper)`
background-color: 
  ${(props) => props.theme.colors.bgSecondary};
`

const ContactInner = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 2rem;
padding: 2rem;
`

const ContactWays = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;
width: 100%;
@media screen and (max-width: 668px) {
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media screen and (min-width: 669px) and (max-width: 991px){
  grid-template-columns: 1fr;
  gap: 2rem;
}
`

const Message = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 100%;
`

const StyledInput = styled.input`
  padding: 10px 50px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 20px;
  width: 70%;
  border: none;
  outline: none;
  font-family: Vazirmatn, sans-serif;

  @media screen and (max-width: 668px) {
    font-size: 10px;
    width: 85%;
  }

  @media screen and (min-width: 669px) and (max-width: 991px){ 
  width: 85%;
  padding: 10px 80px;

  }
`

const MessageButton = styled(StyledButton)`
position: absolute;
right: 20px;
top: 26%;

@media screen and (max-width: 668px) {
    padding: 10px;
    font-size: 10px;
    top: 0;
    right: 0;
}

@media screen and (min-width: 669px) and (max-width: 991px){ 
  top: -5%;
  right: 10px;
}

`

const OtherContactWays = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

`

const ContactTitle = styled.h2`
  margin: 10px 0; 
  font-size: 30px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 668px) {
    font-size: 20px;
}
`

const ContactWay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: all .3s ease-out;

  &:hover {
    color:${(props) => props.theme.colors.primary}; 
  }

  @media screen and (max-width: 668px) {
    font-size: 10px;
  }

  @media screen and (min-width: 669px) and (max-width: 991px){ 
    font-size: 20px;
  }

`

const PhoneIcon = styled(GiRotaryPhone)`
color:${(props) => props.theme.colors.primary};
font-size: 50px;

@media screen and (max-width: 668px) {
    font-size: 25px;
}
`

const EmailIcon = styled(MdEmail)`
color:${(props) => props.theme.colors.primary};
font-size: 50px;

@media screen and (max-width: 668px) {
    font-size: 25px;
}
`

const sendMessageHandler = () => {
  swal({
    title: "متاسفم!",
    text: "امکان ارسال وجود ندارد!",
    icon: "error",
    button: "باشه"
  })
}


const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <Container>
        <ContactInner>
          <ContactTitle>راه های تماس</ContactTitle>
          <ContactWays>
            <Message>
              <MessageButton onClick={sendMessageHandler}>ارسال پیام</MessageButton>
              <StyledInput placeholder='پیام شما' />
            </Message>
            <OtherContactWays>
              <ContactWay>
                <PhoneIcon />
                09109322320
              </ContactWay>
              <ContactWay>
                <EmailIcon />
                behnamzare100@yahoo.com
              </ContactWay>
            </OtherContactWays>
          </ContactWays>
        </ContactInner>
      </Container>
    </ContactWrapper>
  )
}

export default Contact