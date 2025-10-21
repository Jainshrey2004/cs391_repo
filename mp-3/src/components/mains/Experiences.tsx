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


export default function Experiences() {
    return (
        <StyledMain>
            <title>Experiences | Resume</title>
            <StyledH2>Experiences</StyledH2>

            <StyledH3>Dailoqa — Technical Product Manager Intern</StyledH3>
            <StyledP>Delhi, India • Jun 2025 – Jul 2025</StyledP>
            <ul>
                <StyledLi>Led the lifecycle of an AI WhatsApp loan assistant for a large private bank; prioritized features (RICE) and coordinated with engineering/design.</StyledLi>
                <StyledLi>Wrote PRDs and acceptance criteria; streamlined reviews to reduce manual work and speed approvals.</StyledLi>
                <StyledLi>Ran user interviews and A/B tests that increased completion rates and reduced abandonment.</StyledLi>
            </ul>

            <StyledH3>Sopra Steria — Product Management Intern (Software)</StyledH3>
            <StyledP>Delhi, India • May 2024 – Aug 2024</StyledP>
            <ul>
                <StyledLi>Defined roadmap (MoSCoW) for a smartphone recommender; conducted 30+ interviews and competitive analysis.</StyledLi>
                <StyledLi>Translated feedback into user stories; improved sprint predictability and engagement metrics.</StyledLi>
            </ul>

            <StyledH3>Boston University — Project Manager & Research Assistant</StyledH3>
            <StyledP>Boston, MA • Jan 2024 – Sep 2024</StyledP>
            <ul>
                <StyledLi>Built an OKR framework for assessing emerging defense tech; coordinated a 9-person research team.</StyledLi>
                <StyledLi>Automated patent/literature collection in Python (Selenium), cutting manual effort significantly.</StyledLi>
            </ul>
        </StyledMain>
    )
}