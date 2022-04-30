import Intro from "./components/introduction/intro";
import About from "./components/about/about"
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
    )
};

export default App;
