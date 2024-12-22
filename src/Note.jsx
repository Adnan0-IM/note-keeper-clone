const Note = ({ title, content, handleDelete, id }) => {

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};

export default Note;
