import "./App.css";
import Description from "./components/description/description";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";

function App() {
  return (
    <main className="bg-gradient-to-t from-slate-200 to-slate-50 h-screen overflow-auto">
      <Header />
      <Description />
      <Projects />
    </main>
  );
}

export default App;
