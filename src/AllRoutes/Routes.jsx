import { WarningIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom"
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home"
import { Project } from "./Project";
import { Resume } from "./Resume";
import { Skills } from "./Skills";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Text fontSize={"80px"}><WarningIcon /> 404 Page Not Found</Text>} />
        </Routes>
    )
}