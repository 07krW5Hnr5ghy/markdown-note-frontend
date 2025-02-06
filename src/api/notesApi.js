const API_BASE_URL = "http://localhost:5000/api/notes";

export const getNotes = async () => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch notes");
  return response.json();
};

export const getNote = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch note");
  return response.json();
};

export const saveNote = async (title, content) => {
  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });
  if (!response.ok) throw new Error("Failed to save note");
  return response.json();
};

export const checkGrammar = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}/grammar`);
  if (!response.ok) throw new Error("Failed to check grammar");
  return response.json();
};
