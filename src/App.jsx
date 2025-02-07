import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="max-w-3xl mx-auto p-6 bg-black">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Markdown Notes</h1>
        <Routes>
          <Route path="/" element={<><NoteEditor /><NoteList /></>} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
