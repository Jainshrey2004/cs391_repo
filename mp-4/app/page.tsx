"use client"
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: deeppink;
  margin-bottom: 20px;
    font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: whitesmoke;
  margin-bottom: 15px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  color: white;
  background-color: #0070f3;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 15px;

  &:hover {
    background-color: #0051cc;
  }
`;

export default function Home() {
    return (
        <Container>
            <Title>Understanding Weather</Title>

            <Paragraph>
                Weather is the state of the atmosphere at a particular place and time. It includes
                temperature, humidity, precipitation, cloudiness, visibility, and wind. Weather patterns
                are constantly changing due to the movement of air masses and the interaction between
                different atmospheric conditions.
            </Paragraph>

            <Paragraph>
                Temperature is one of the most important weather variables. It affects how we feel,
                what we wear, and how we plan our daily activities. Humidity measures the amount of
                moisture in the air, which can make hot days feel even hotter or cold days feel colder.
            </Paragraph>

            <Paragraph>
                Wind speed and direction tell us how fast and from where the air is moving. This
                information is crucial for aviation, sailing, and understanding how weather systems
                develop and move across regions.
            </Paragraph>

            <Paragraph>
                Modern weather forecasting uses satellites, radar, weather stations, and computer
                models to predict atmospheric conditions. This helps us prepare for our daily
                activities and stay safe during severe weather events.
            </Paragraph>

            <StyledLink href="/boston">
                See what Boston weather looks like today
            </StyledLink>
        </Container>
    );
}