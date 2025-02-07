import { useState } from "react";
import { saveNote } from "../api/notesApi";
import { toast } from "react-toastify";

const NoteEditor = ({ onNoteSaved }) => {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");

  const handleSubmit = async () => {
    try {
      const savedNote = await saveNote(title, markdown);
      onNoteSaved(savedNote);
      toast.success("Note saved successfully!");
      setTitle("");
      setMarkdown("");
    } catch (error) {
      toast.error("Error saving note.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="w-full h-40 p-3 mt-4 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Write your note in Markdown..."
      />
      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Save Note
      </button>
    </div>
  );
};

export default NoteEditor;
