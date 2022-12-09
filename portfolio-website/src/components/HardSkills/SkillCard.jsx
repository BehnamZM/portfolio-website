import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components"

const HardSkillCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`

const HardSkillCardName = styled.h4`
color: 
  ${(props) => props.theme.colors.textOne};
`
const SkillCard = ({ percentage, tec }) => {
  return (

    <HardSkillCard>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `rgba(251, 59, 100, ${percentage / 100})`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#d6d6d6',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: '#fb3b64',
              // Text size
              fontSize: '16px',
              fontWeight: '900',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: '#fb3b64',
            },
          }} />
      </div>
      <HardSkillCardName>{tec}</HardSkillCardName>
    </HardSkillCard>

  )
}

export default SkillCard