import styled from "styled-components";

const StyledMain = styled.main`
    main{
        background-color: #f8fafc;
        height: 100vh;
        width: 70%;
        padding: 1%;
    }`;

const StyledH2 = styled.h2`
    text-align: center;
    color: #1e3a8a;
    @media screen and (max-width: 750px){
    text-align: center;}
    `;

const StyledH3 = styled.h3`
    margin-top: 10px;`;

const StyledP = styled.p`
margin-top: 4px`;

const StyledLi = styled.li`
    margin-top: 4px`;



export default function Projects() {
    return (
        <StyledMain>
            <title>Project | Resume</title>
            <StyledH2>Projects</StyledH2>

            <StyledH3>Ticket Manager — Task Assignment System</StyledH3>
            <ul>
                <StyledLi>Built a React/Node/Mongo tool to track incoming tickets and assignments.</StyledLi>
                <StyledLi>Reduced tracking errors and improved turnaround by introducing a clear workflow.</StyledLi>
            </ul>

            <StyledH3>Vision Crafter — AI-Powered Content Automation</StyledH3>
            <ul>
                <StyledLi>Generated and curated marketing images with an OpenAI-powered pipeline.</StyledLi>
                <StyledLi>Improved design workflow efficiency and page-load times using a CDN.</StyledLi>
            </ul>

            <StyledH3>Calculator — Basic Arithmetic Operations</StyledH3>
            <div id="calc">
                <StyledH3 id="calc-title">Calculator</StyledH3>
                <StyledP>Enter two numbers and choose an operation.</StyledP>
                <label htmlFor="one">Enter Number 1: </label><input type="text" id="one"/>
                <label htmlFor="two">Enter Number 2: </label><input type="text" id="two"/>

                <StyledH3 id="output">Result</StyledH3>

            </div>
        </StyledMain>
    )

}