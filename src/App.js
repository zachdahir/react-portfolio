import Nav from "./components/nav"
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects"
import ContactMe from "./components/contact";
import Footer from "./components/footer";

function App() {

  return (
    <>
      {Header()}
      {Nav()}
      {About()}
      {Skills()}
      {Projects()}
      {ContactMe()}
      {Footer()}
    </>
  );
}

export default App;
