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


export default function Root(){
    return (
        <>
            <Header />
            <Nav />
            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path={`/skills`} element={<Skills/>}/>
                <Route path={`/projects`} element={<Projects/>}/>
                <Route path={`/education`} element={<Education/>}/>
                <Route path={`/references`} element={<References/>}/>
                <Route path={`/experiences`} element={<Experiences/>}/>
            </Routes>
            <Footer />
        </>
    )
}