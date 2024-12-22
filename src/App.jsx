import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState, useEffect } from "react";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

    // Save notes to localStorage whenever notes change
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const handleDelete = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    );
  };
  return (
    <div>
      <Header />
      <CreateArea onAddNote={addNote} />
      <div className="notes-container">

      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            handleDelete={handleDelete}
          />
        );
      })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
