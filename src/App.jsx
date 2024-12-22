import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

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
      {notes.map((note, index) => {
        return (
          <Note
            key={1}
            id={index}
            title={note.title}
            content={note.content}
            handleDelete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
