// import { Link } from "react-router-dom";
// import '../Styles/Navbar.css';

// const Navbar = () => {
//     return (
//         <div id="nav-menu">
//             <div>
//                 <h3><Link to="/">Himanshu Tyagi</Link></h3>
//             </div>
//             <div>
//                 <h3>
//                     <Link className="nav-link home" to="/">Home</Link>
//                 </h3>
//                 <h3>
//                     <Link className="nav-link about" to="/about">About</Link>
//                 </h3>
//                 <h3>
//                     <Link className="nav-link skills" to="/skill">Skills</Link>
//                 </h3>
//                 <h3>
//                     <Link className="nav-link projects" to="/project">Project</Link>
//                 </h3>
//                 <h3>
//                     <Link className="nav-link contact" to="/contact">Contact</Link>
//                 </h3>
//                 <h3>
//                     {/* <Link className="nav-link resume" to="/resume">Resume</Link> */}
//                     <a className="nav-link resume" target={"_blank"} href="https://drive.google.com/uc?export=download&id=1dADDjdbFOyaUgFNYYm3ptKvPTE84Bgbe" download="Himanshu-tyagi-resume.pdf">
//                         <button id="resume-button-1">Download Resume</button>
//                     </a>
//                 </h3>
//             </div>
//         </div>
//     )
// }

import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            {" "}
            <Link
              to="/"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              Ravi Sharma
            </Link>
          </Box>
          <HStack
            id="nav-menu"
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            <Link
              className="nav-link home"
              to="/"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              Home
            </Link>
            <Link
              className="nav-link about"
              to="About"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              About
            </Link>
            <Link
              className="nav-link skills"
              to="Skill"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              Skills
            </Link>
            <Link
              className="nav-link projects"
              to="Project"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              Projects
            </Link>
            <Link
              className="nav-link contact"
              to="Contact"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              Contact
            </Link>
            <a
              className="nav-link resume"
              target={"_blank"}
              href="https://drive.google.com/uc?export=download&id=1uG22xLwKqY-MzErmyG1znHakTwf52gnX"
              download="Ravi-Sharma-Resume.pdf"
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
            >
              <button id="resume-button-1">Download Resume</button>
            </a>
          </HStack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
