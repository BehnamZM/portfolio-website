import styled from "styled-components"
import { CgMenuHotdog } from 'react-icons/cg'
import { useState } from "react"
import Logo from '../Logo/Logo'
import { GoHome } from 'react-icons/go'
import { BsPerson } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { GiStairsGoal } from 'react-icons/gi'
import { IoMdContacts } from 'react-icons/io'





const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: transparent;
  position: absolute;
  right: 0;

`

const NavInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const NavbarItems = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 668px){
    position: absolute;
    top: 70px;
    width: 100vw;
    height: 90vh;
    flex-direction: column;
    gap: 30px;
    right: 
    ${(props) => (props.showMenu ? 0 : '-100%')};
    background-color: 
    ${(props) => props.theme.colors.primary};
    align-items: center;
    transition: all .3s ease-out;
    padding-top:50px;

  }
`

const NavbarLi = styled.li`
  list-style: none;
`

const NavbarLink = styled.a`

  font-weight: 900;
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;
  transition: all .5s ease-out;
  color: white;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media screen and (min-width: 669px) and (max-width: 991px){ 
    font-size: 15px;
}

`

// const MenuIcon = styled(CgMenuHotdog)`
//   color: white;
//   font-size: 35px;

//   @media screen and (min-width: 668px){
//     display: none;
//   }
// `

const MobileNavbarItems = styled.ul`
  width: 90%;
  transform: translateX(-5%);
  position: fixed;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  bottom: 3%;
  height: 60px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 1);

  @media screen and (min-width: 668px) {
    display: none;
  }
`

const MobileNavbarItem = styled.li`
  list-style: none;
`

const MobileNavbarLink = styled.a`
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  padding: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    background-color: white;
  }
`

const HomeIcon = styled(GoHome)``
const PersonIcon = styled(BsPerson)``
const ProjectIcon = styled(CgWebsite)``
const HardSkillIcon = styled(GiStairsGoal)``
const ContactIcon = styled(IoMdContacts)``





const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const showNavbarHandler = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Nav>
      <MobileNavbarItems>
        <MobileNavbarItem>
          <MobileNavbarLink href="#">
            <HomeIcon />
          </MobileNavbarLink>
        </MobileNavbarItem>
        <MobileNavbarItem>
          <MobileNavbarLink href="#skills">
            <PersonIcon />
          </MobileNavbarLink>
        </MobileNavbarItem>
        <MobileNavbarItem>
          <MobileNavbarLink href="#projects">
            <ProjectIcon />
          </MobileNavbarLink>
        </MobileNavbarItem>
        <MobileNavbarItem>
          <MobileNavbarLink href="#contact">
            <HardSkillIcon />
          </MobileNavbarLink>
        </MobileNavbarItem>
        <MobileNavbarItem>
          <MobileNavbarLink href="#hardskills">
            <ContactIcon />
          </MobileNavbarLink>
        </MobileNavbarItem>
      </MobileNavbarItems>
      <NavInner>
        <Logo />
        {/* <MenuIcon
          onClick={showNavbarHandler} /> */}
        <NavbarItems>
          <NavbarLi>
            <NavbarLink href="#">خانه</NavbarLink>
          </NavbarLi>
          <NavbarLi>
            <NavbarLink href="#skills">مهارتهای نرم</NavbarLink>
          </NavbarLi>
          <NavbarLi>
            <NavbarLink href="#projects">پروژه های من</NavbarLink>
          </NavbarLi>
          <NavbarLi>
            <NavbarLink href="#contact">تماس با من</NavbarLink>
          </NavbarLi>
          <NavbarLi>
            <NavbarLink href="#hardskills">مهارت های تخصصی</NavbarLink>
          </NavbarLi>
        </NavbarItems>
      </NavInner>
    </Nav>
  )
}

export default Navbar