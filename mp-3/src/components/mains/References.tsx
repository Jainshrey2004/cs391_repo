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

export default function References() {
    return (
        <StyledMain>
            <title>References | Resume</title>
            <StyledH2>References</StyledH2>

            <StyledH3>Reference 1</StyledH3>
            <StyledP>Name: Shreyash Sinha</StyledP>
            <StyledP>Title/Company: Senior Consultant at Dailoqa</StyledP>
            <StyledP>Email: xxxx@dailoqa.com • Phone: xxx xxx xxxx</StyledP>
            <StyledP>Relationship: Manager at Daioqa</StyledP>

            <StyledH3>Reference 2</StyledH3>
            <StyledP>Name: RonAsia Rouse</StyledP>
            <StyledP>Title/Company: Associate Director at BU Advancement</StyledP>
            <StyledP>Email: rrouse@bu.edu • Phone: xxx xxx xxxx</StyledP>
            <StyledP>Relationship: Manager at BU Advancement</StyledP>
        </StyledMain>
    )
}