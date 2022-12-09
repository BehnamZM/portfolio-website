
import styled from "styled-components"
import { Container, Wrapper } from "../Styles/Styles"
import Title from '../Title/Title'
import SkillCard from "./SkillCard"
import Image1 from '../../assets/Campaign launch_Two Color.png'
import Image2 from '../../assets/LinkedIn_Flatline.png'
import Image3 from '../../assets/Target_Flatline.png'
import Image4 from '../../assets/Website_Flat.png'
import Image5 from '../../assets/LinkedIn_Two Color.png'
import Image6 from '../../assets/Instagram post _Two Color.png'

const SkillsWrapper = styled(Wrapper)`
  background-color: 
  ${(props) => props.theme.colors.bgPrimary};
`

const SkillsInner = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  
  @media screen and (max-width: 668px) {
   grid-template-columns: 1fr; 
  }

  @media screen and (min-width: 669px) and (max-width: 990px) {
   grid-template-columns: 1fr 1fr; 
  }

`

const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      <Container>
        <SkillsInner>
          <Title title1="مهارتهای" title2="نرم " />
          <Cards>
            <SkillCard
              image={Image1}
              title="مسئولیت پذیر"
              des="مسئولیت پذیری به معنای مالکیت اشتباهات است. اعتراف به این‌که تصمیمی که گرفتید نتیجه نامطلوبی به همراه داشت دشوار است، اما در دراز مدت، هم شما و هم کارفرمایتان دید مثبتی از شما به دست می‌آورند." />
            <SkillCard
              image={Image2}
              title="توانایی حل مسئله"
              des="مهارت حل مسئله به معنای توانمندی در برخورد کردن با مشکلات و چالش‌های جدید و غیر قابل پیش‌بینی است. این مهارت به افراد کمک می‌کند تا منشاء مشکلات را پیدا کنند و راه‌حل موثری را برای حل آن بیابند. مهارت حل مسئله لازمه کار هر برنامه نویس است" />
            <SkillCard
              image={Image3}
              title="انگیزه بالا"
              des="برنامه نویسی یکی از مشاغل نسبتاً سختی است که برای کسب موفقیت در آن باید تلاش زیادی کرد. باید به خاطر داشت برای رسیدن به اهداف، سختی مسیر آن را نیز باید پذیرفت و هیچ هدفی بدون تلاش و مواجه با چالش‌های مختلف، محقق نمی‌شود. داشتن اشتیاق در طی کردن این مسیر نیز نقش بسزایی ایفا می‌کند." />
            <SkillCard
              image={Image4}
              title="کار گروهی"
              des="همواره در یک مجموعه به منظور رسیدن به اهداف با به کارگیری ارتباط موثر بین اعضا امکان پذیر خواهد بود" />
            <SkillCard
              image={Image5}
              title="مهارت گوش دادن"
              des="مهارت گوش دادن به عنوان مهم‌ترین مهارت برای تقویت مهارت ارتباطی به شمار می‌رود. به عبارتی، ارتباط اثربخش زمانی برقرار می‌شود که افراد به صحبت‌های سایر اشخاص گوش دهند و درک متقابلی از صحبت‌های یکدیگر داشته باشند." />
            <SkillCard
              image={Image6}
              title="خلاقیت"
              des="بهترین ایده‌ها و راه‌حل‌ها اغلب زمانی به سراغ ما می‌آیند که از زاویه‌ای متفاوت و کمتر آشکار به مسائل نگاه می‌کنیم. این همان چیزی است که خلاق‌ترین افراد از برنامه‌نویسان گرفته تا کارآفرینان و نویسندگان را از یکدیگر متمایز می‌کند." />
          </Cards>
        </SkillsInner>
      </Container>
    </SkillsWrapper>
  )
}

export default Skills