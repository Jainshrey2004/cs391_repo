import {Link} from "react-router";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 30%;
`;

const StyledNav = styled.nav`
    background-color: #e5e7eb;
    height: 100%;
    text-align: center;
`;

const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 750px){
        flex-direction: row;
    }
`;

const StyledList = styled.li`
    border: 2px solid #334155;
    margin: 5% auto;
    width: 80%;
    padding: 2%;
    background: lightgrey;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: calc(2px + 1.5vw);
    font-weight: bold;
    color: #1e3a8a;
`;


export default function Nav(){
    return (
        <StyledDiv>
        <StyledNav>
            <StyledUl>
                <StyledList><StyledLink to={`/`}>Home</StyledLink></StyledList>
                <StyledList><StyledLink to={`/education`}>Education</StyledLink></StyledList>
                <StyledList><StyledLink to={`/experiences`}>Experiences</StyledLink></StyledList>
                <StyledList><StyledLink to={`/skills`}>Skills</StyledLink></StyledList>
                <StyledList><StyledLink to={`/projects`}>Projects</StyledLink></StyledList>
                <StyledList><StyledLink to={`/references`}>References</StyledLink></StyledList>
            </StyledUl>
        </StyledNav>
        </StyledDiv>
    )
}