import { useState,useEffect } from "react";
import NoteEditor from "../components/NoteEditor";
import NoteList from "../components/NoteList";
import { getNotes } from "../api/notesApi";
const MainPage = () => {
    const [notes,setNotes] = useState([]);
    useEffect(()=>{
        getNotes().then(setNotes).catch(console.error);
    },[]);
    const addNewNote = async (newNote) => {
        await getNotes().then(setNotes).catch(console.error);
    }
    return(
        <>
            <NoteEditor onNoteSaved={addNewNote}/>
            <NoteList notes={notes}/>
        </>
    );
}

export default MainPage;