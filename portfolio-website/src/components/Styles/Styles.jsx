import styled from "styled-components";


export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
`

export const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 30px;
  font-family: vazirmatn;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primary};
  transition: all .3s ease-out;
  color:${(props) => props.theme.colors.light};


  &:hover {
    background-color:${(props) => props.theme.colors.light};
    color:${(props) => props.theme.colors.primary};

  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`