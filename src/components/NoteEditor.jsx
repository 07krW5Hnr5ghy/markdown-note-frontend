import { useState } from "react";
import { saveNote } from "../api/notesApi";
import { toast } from "react-toastify";

const NoteEditor = () => {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");

  const handleSubmit = async () => {
    try {
      await saveNote(title, markdown);
      toast.success("Note saved successfully!");
      setTitle("");
      setMarkdown("");
    } catch (error) {
      toast.error("Error saving note.");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="w-full h-40 p-2 mt-2 border rounded"
        placeholder="Write your note in Markdown..."
      />
      <button onClick={handleSubmit} className="mt-2 p-2 bg-blue-500 text-white rounded">
        Save Note
      </button>
    </div>
  );
};

export default NoteEditor;
