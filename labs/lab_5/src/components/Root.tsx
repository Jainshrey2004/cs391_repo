import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router";
import Experiences from "./mains/Experiences.tsx";
import Home from "./mains/Home.tsx";


export default function Root(){
    return (
        <>
            <Header />
            <Nav />
            <Routes>
                <Route path={`/`} element={<Home/>}/>
                <Route path={`/experiences`} element={<Experiences/>}/>
            </Routes>
            <Footer />
        </>
    )
}