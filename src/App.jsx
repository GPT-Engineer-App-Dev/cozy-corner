import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode, Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

const App = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "white" : "gray.800"} color={colorMode === "light" ? "black" : "white"} minH="100vh">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
