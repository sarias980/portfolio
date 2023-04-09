import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

const AppNavigation = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    )
}

export default AppNavigation;
