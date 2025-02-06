import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold">Markdown Notes</h1>
        <Routes>
          <Route path="/" element={<><NoteEditor /><NoteList /></>} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
