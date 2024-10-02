import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './contexts/theme';
import Layout from './pages/Layout';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {

  const [themeMode, setThemeMode] = useState("dark")

  const lightTheme = () => {
    setThemeMode("light")
  }
  
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <Router>
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="education" element={<Education />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;





















// import { useState, useEffect } from 'react';
// import './App.css';
// import { ThemeProvider } from './contexts/theme';
// import ThemeBtn from './components/ThemeBtn';
// import Card from './components/Card';

// function App() {

//   const [themeMode, setThemeMode] = useState("light")

//   const lightTheme = () => {
//     setThemeMode("light")
//   }
  
//   const darkTheme = () => {
//     setThemeMode("dark")
//   }

//   useEffect(() => {
//     document.querySelector('html').classList.remove("light", "dark");
//     document.querySelector('html').classList.add(themeMode);
//   }, [themeMode])
  

//   return (
//     <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             <ThemeBtn />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             <Card />
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
