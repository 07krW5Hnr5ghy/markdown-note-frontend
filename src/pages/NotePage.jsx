import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNote, checkGrammar } from "../api/notesApi";
import ReactMarkdown from "react-markdown";

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [grammar, setGrammar] = useState(null);

  useEffect(() => {
    if (id) {
      getNote(id).then(setNote).catch(console.error);
    }
  }, [id]);

  const handleGrammarCheck = () => {
    if (id) {
      checkGrammar(id)
        .then(setGrammar)
        .catch(() => alert("Grammar check failed"));
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      {note && (
        <>
          <h1 className="text-2xl font-bold text-gray-800">{note.title}</h1>
          <div className="prose mt-4 border p-4 bg-gray-50 rounded-md">
            <ReactMarkdown>{note.content}</ReactMarkdown>
          </div>
          <button
            onClick={handleGrammarCheck}
            className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Check Grammar
          </button>
          {grammar && (
            <div className="mt-4 p-4 border bg-red-50 rounded-md">
              <h3 className="font-bold text-red-600">Grammar Issues:</h3>
              <ul className="list-disc ml-4">
                {grammar.matches.map((match, index) => (
                  <li key={index} className="text-red-600">{match.message}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NotePage;
