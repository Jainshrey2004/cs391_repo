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

const StyledP = styled.p`
margin-top: 4px`;

const StyledLi = styled.li`
    margin-top: 4px`;



export default function Education() {
    return (
        <StyledMain>
            <title>Education | Resume</title>
            <StyledH2>Education</StyledH2>

            <StyledH3>Boston University — B.A. in Computer Science</StyledH3>
            <StyledP>Boston, MA • Expected May 2026</StyledP>
            <ul>
                <StyledLi>Dean’s List (multiple semesters)</StyledLi>
                <StyledLi>Coursework: Data Structures, Algorithms, Software Engineering, Distributed Systems, Databases, ML for Business Analytics</StyledLi>
                <StyledLi>Activities: BU Spark!, product & hackathon clubs</StyledLi>
            </ul>

            <StyledH3>Bal Bharati High School — High School Diploma</StyledH3>
            <StyledP>New Delhi, India • Graduated 2022</StyledP>
            <ul>
                <StyledLi>Graduated with distinction; strong focus on Mathematics and Computer Science</StyledLi>
                <StyledLi>Led the Coding Club; organized weekly problem solving sessions for 30+ students</StyledLi>
                <StyledLi>Built a simple school events website as a class project (HTML/CSS/JS)</StyledLi>
                <StyledLi>Volunteered as peer tutor for Algebra and Physics</StyledLi>
            </ul>
        </StyledMain>
    )
}