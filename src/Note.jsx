import { FaTrash } from "react-icons/fa6";
const Note = ({ title, content, handleDelete, id }) => {

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => handleDelete(id)} style={{background:"transparent"}}><FaTrash/></button>
    </div>
  );
};

export default Note;
