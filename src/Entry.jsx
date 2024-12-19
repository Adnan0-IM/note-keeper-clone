import React from "react";
import Note from "./Note";
import notes from "./notes";

const Entry = () => {
  return notes.map((entry) => {
    return <Note key={entry.id} title={entry.title} content={entry.content} />;
  });
};

export default Entry;
