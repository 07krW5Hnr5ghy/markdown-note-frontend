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
    <div className="p-4">
      {note && (
        <>
          <h1 className="text-2xl font-bold">{note.title}</h1>
          <ReactMarkdown className="border p-4 mt-2">{note.content}</ReactMarkdown>
          <button onClick={handleGrammarCheck} className="mt-2 p-2 bg-green-500 text-white rounded">
            Check Grammar
          </button>
          {grammar && (
            <div className="mt-2 p-4 border">
              <h3 className="font-bold">Grammar Issues:</h3>
              <ul>
                {grammar.matches.map((match, index) => (
                  <li key={index}>{match.message}</li>
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
