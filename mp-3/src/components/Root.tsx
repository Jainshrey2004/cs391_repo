import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router";
import Experiences from "./mains/Experiences.tsx";
import Home from "./mains/Home.tsx";
import Skills from "./mains/Skills.tsx";
import Projects from "./mains/Projects.tsx";
import Education from "./mains/Education.tsx";
import References from "./mains/References.tsx";
import styled from "styled-components";

const StyledWrapper = styled.div`
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    background: #f5f7fb;
    color: #111827;
    box-sizing: border-box;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    @media screen and (max-width: 750px){
        flex-direction: column;}

`;
export default function Root(){
    return (
        <>
            <StyledWrapper>
            <Header />
                <StyledContainer>
            <Nav />
            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path={`/skills`} element={<Skills/>}/>
                <Route path={`/projects`} element={<Projects/>}/>
                <Route path={`/education`} element={<Education/>}/>
                <Route path={`/references`} element={<References/>}/>
                <Route path={`/experiences`} element={<Experiences/>}/>
            </Routes>
                </StyledContainer>
                <Footer />
                </StyledWrapper>

        </>
    )
}