import styled from "styled-components";

const StyledMain = styled.main`
    main{
        background-color: #f8fafc;
        height: 100vh;
        width: 70%;
        padding: 1%;
        @media screen and (max-width: 750px){
            width: 100%}
        
    }`;

const StyledH2 = styled.h2`
    text-align: center;
    color: #1e3a8a;
    @media screen and (max-width: 750px){
    text-align: center;}
    `;

const StyledH3 = styled.h3`
    margin-top: 10px;`;

const StyledLi = styled.li`
    margin-top: 4px`;


export default function Skills() {
    return (
        <StyledMain>
            <title>Skills | Resume</title>
            <StyledH2>Skills</StyledH2>

            <StyledH3>Product</StyledH3>
            <ul>
                <StyledLi>Roadmapping (RICE, MoSCoW), PRDs, user research/interviews, usability testing</StyledLi>
                <StyledLi>Experimentation & A/B testing, KPI definition and tracking</StyledLi>
                <StyledLi>Agile/Scrum, cross-functional collaboration, stakeholder communication</StyledLi>
            </ul>

            <StyledH3>Technical</StyledH3>
            <ul>
                <StyledLi>Languages/Frameworks: Python, JavaScript, React, Node.js, Express</StyledLi>
                <StyledLi>Databases: PostgreSQL, MongoDB</StyledLi>
                <StyledLi>APIs & tooling: REST, Postman, Selenium; basics of LangChain</StyledLi>
            </ul>

            <StyledH3>Tools</StyledH3>
            <ul>
                <StyledLi>Git/GitHub, Jira, Figma, Trello, Google Analytics</StyledLi>
            </ul>
        </StyledMain>
    )
}