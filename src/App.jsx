import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { ThemeProvider, useDarkMode } from "./context/ThemeContext";
import About from "./components/About";
import Alert from "./components/Alert";
import { AlertProvider } from "./context/AlertContext";


function App() {
  return (
    <AlertProvider>
      <ThemeProvider>
        <div className="h-screen box-border bg-white dark:bg-[#070709] ">
          <Router>
            <NavBar title="Text Utils" about="About" />
            <Alert />
            <Routes>
              <Route exact path="/" element={<TextForm />} />
              <Route exact path="/About" element={<About />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </AlertProvider>
  );
}

export default App;
