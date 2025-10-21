import styled from "styled-components";

const StyledMain = styled.main`
    main{
        background-color: #f8fafc;
        height: 100vh;
        width: 70%;
        padding: 1%;
    }`;

const StyledImg = styled.img`
    max-width: 40%;
    height: auto;
    display: block;
    margin: 0 auto 20px auto;
`;

const StyledH2 = styled.h2`
    text-align: center;
    color: #1e3a8a;
    @media screen and (max-width: 750px){
    text-align: center;}
    `;

const StyledP = styled.p`
margin-top: 4px`;

export default function Home() {
    return (
        <StyledMain>
            <title>Home | Resume</title>
            <StyledH2>About Me</StyledH2>
            <StyledImg src="/Shrey Profile.jpg" alt="Shrey Jain"/>
            <StyledP>
                I’m a Computer Science student at Boston University passionate about building scalable products and
                systems that solve real world problems. With hands on experience in product management and full stack
                development, I’ve led cross functional teams to deliver AI driven platforms, internal tools, and user
                centric solutions for clients in banking and technology.
            </StyledP>

        </StyledMain>
    )
}