import { useState } from "react";
const CreateArea = ({ onAddNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const submit = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    onAddNote(note);
    e.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div>
      <form className="create-note">
        <input
          onChange={submit}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={submit}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
