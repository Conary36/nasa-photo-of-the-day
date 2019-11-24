import React from "react";
import styled, {keyframes} from 'styled-components';



const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
// const expand = keyframes`
//   from {
//       transform: width 1s ease-in-out, padding-left 1s ease-in-out, 
//         padding-right 1s ease-in-out;;
//   }
//   to {
//       transform: width(90%);
//   }
// `

const Info = styled.p `
    border: 3px groove blue;
    margin: 0 auto;
    margin-top: 1rem;
    width: 80%;


`
const Title = styled.h1`
    animation: ${rotate360}  2s linear;
    font-family: 'StyreneB', 'sans-serif';
`
const PicDiv = styled.div`
    width: 70%;
    height: 50%;
    margin: 2%;
    
`
const Img = styled.img`
    width: 100%;
    transition: width 2s linear 
    &:hover{
        width: 50%;
        
    }  
`

const Container = styled.div`
  width: 100%;
  background: linear-gradient(to left, #fff, #076585, #acb6e5, #86fde8);
`

const Section = styled.section`
    display: flex;
    
`
const InfoDiv = styled.div`
    width: 30%;
`

const NasaCard = ({date, content, hdurl}) =>{


    return(
        <Container>
            <Title>Vision of the Void</Title>
            <p>{date}</p>
            <Section>
                <PicDiv><Img src={hdurl} alt='space pic' /></PicDiv>
                <InfoDiv>
                    <Info>{content}</Info>
                </InfoDiv>
            </Section>
        </Container>
    )

    
}

export default NasaCard;