import './App.css';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Contact } from './layout/section/contact/Contact';
import { Main } from './layout/section/main/Main';
import { Projects } from './layout/section/projects/Projects';
import { Skills } from './layout/section/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

