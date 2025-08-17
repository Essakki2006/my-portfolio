import Navigation from "./components/nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "./ui/toaster";




function App() {
  return (
    <>
      <Helmet>
        <title>Essakki Pandian .M. Thevar - IT Student & Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Essakki Pandian .M. Thevar, an IT student and passionate full-stack developer specializing in modern web technologies. View my projects, skills, and get in touch." />
        <meta property="og:title" content="Essakki Pandian .M. Thevar - IT Student & Full-Stack Developer" />
        <meta property="og:description" content="Portfolio of Essakki Pandian .M. Thevar, an IT student and passionate full-stack developer specializing in modern web technologies. View my projects, skills, and get in touch." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="web developer, full-stack developer, IT student, React, JavaScript, portfolio" />
        <meta name="author" content="Essakki Pandian .M. Thevar" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;