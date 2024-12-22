import { FaPlus } from "react-icons/fa6";
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
    e.preventDefault();
    if (note.title !== "" && note.content !== "") {
      onAddNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };

  const [cliked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <form className="create-note">
        {cliked && (
          <input
            onChange={submit}
            name="title"
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onChange={submit}
          onClick={handleClick}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={cliked ? "3" : 1}
        />

        <button onClick={handleSubmit}>
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
