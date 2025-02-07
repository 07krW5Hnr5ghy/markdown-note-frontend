import { Link } from "react-router-dom";

const NoteList = ({ notes }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Saved Notes</h2>
      <ul className="space-y-2">
        {notes.map((note) => (
          <li key={note._id}>
            <Link
              to={`/note/${note._id}`}
              className="text-blue-500 hover:underline font-medium"
            >
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
