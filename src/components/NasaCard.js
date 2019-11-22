import React from "react";
import styled from 'styled-components';

const Info = styled.p `
    border: 3px groove blue;
    margin: 0 auto;
    margin-top: 1rem;
    width: 98%;

`
const PicDiv = styled.div`
    width: 70%;

`
const Img = styled.img`
    width: 100%;
`
const Container = styled.div`
  background: linear-gradient(to left, #fff, #076585, #acb6e5, #86fde8);
`;
const Section = styled.section`
    display: flex;
    
`
const InfoDiv = styled.div`
    width: 30%;
`

const NasaCard = ({date, content, hdurl}) =>{




    return(
        <Container>
            <h1>Vision of the Void</h1>
            <p>{date}</p>
            <Section>
                <PicDiv><Img src={hdurl} alt='space pic'/></PicDiv>
                <InfoDiv>
                    <Info>{content}</Info>
                </InfoDiv>
            </Section>
        </Container>
    )

    
}

export default NasaCard;