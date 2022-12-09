import { useState } from "react"
import styled from "styled-components"
import { Container, Wrapper } from "../Styles/Styles"
import Datas from './ProjectsData'
import Title from '../Title/Title'
import AllCImg from '../../assets/Ranking_Isometric.png'



const TabMenuWrapper = styled(Wrapper)`
  background-color: 
  ${(props) => props.theme.colors.bgPrimary};
`

const TabMenuInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const CategoryBoxes = styled.div`
  display:flex;
  gap: 2rem;

  
  @media screen and (max-width: 668px){
    gap: 7px;
  }
`

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  opacity: 0.4;
  cursor: pointer;
  transition: all .3s ease-out;

  &:hover{
    opacity: 1;
  }
  &:active{
    opacity: 1;
  }

`

const CategoryImage = styled.img`
  width: 100px;
  


  @media screen and (max-width: 668px){
    width: 45px;
  }
`

const CategoryName = styled.div`
  color: ${(props) => props.theme.colors.textOne};

  
  @media screen and (max-width: 668px){
    font-size: 10px;
  }
`

const MenuItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 668px){
    grid-template-columns: 1fr;
  }
`

const MenuItem = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border-radius: 15px;
  transition: all .3s ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: 9px 58px 121px -61px rgba(0,0,0,0.55);
    -webkit-box-shadow: 9px 58px 121px -61px rgba(0,0,0,0.55);
    -moz-box-shadow: 9px 58px 121px -61px rgba(0,0,0,0.55);
  }
`

const MenuItemImage = styled.img`
  width: 80%;
  border-radius: 10px;
`

const MenuItemName = styled.div`
  color: ${(props) => props.theme.colors.textOne};
  font-weight: 200;
  font-size: 25px;
`

const allCategories = [{
  categoryName: 'همه',
  categoryImage: AllCImg
}, ...new Set(Datas.map(data => data.category))]






const ProjectsTabMenu = () => {

  const [menuDatas, setMenuDatas] = useState(Datas)
  const [categories, setCategories] = useState(allCategories)


  const AddActiveMenuHandler = (itemInfo) => {
    console.log(itemInfo);
  }

  const filterMenus = (category) => {
    if (category === 'همه') {
      setMenuDatas(Datas)
      return
    }
    const filteredMenus = Datas.filter(item =>
      category === item.category.categoryName)
    setMenuDatas(filteredMenus)
  }


  return (
    <TabMenuWrapper id="projects">
      <Container>
        <TabMenuInner>
          <Title title1="پروژه های" title2="من" />
          <CategoryBoxes>

            {categories.map(item => (
              <StyledCategory
              key={item.categoryImage}
                onClick={() => {
                  AddActiveMenuHandler(item)
                  filterMenus(item.categoryName)
                }}>
                <CategoryImage src={item.categoryImage} />
                <CategoryName>
                  {item.categoryName}
                </CategoryName>
              </StyledCategory>
            ))}

          </CategoryBoxes>
          <MenuItems>

            {menuDatas.map((item) => (
              <MenuItem key={item.id} href={item.href}>
                <MenuItemImage src={item.projectImage} />
                <MenuItemName>
                  {item.projectName}
                </MenuItemName>
              </MenuItem>
            ))}

          </MenuItems>
        </TabMenuInner>
      </Container>
    </TabMenuWrapper>
  )
}

export default ProjectsTabMenu